import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const raiz = process.cwd();
const origem = path.join(raiz, "public", "img", "kamalu-logo.jpg");
const destinoApp = path.join(raiz, "app");

const FUNDO = "#2b1a14";
const LADO_ICON = 512;
const LADO_APPLE = 180;

// bbox do monograma "k" — recorte fino de x117–365 / y135–350 do logo
// (spec §1), restrito à letra para o favicon ficar legível a 32px.
const bbox = { left: 192, top: 135, width: 112, height: 111 };

// O traço do logo é cinza-escuro (#3E3F3C) sobre preto. Ampliamos o ganho,
// cortamos o ruído do JPEG perto do preto e puxamos para creme — o mesmo
// caminho do filtro CSS do logo (grayscale + brightness + sepia), só que
// resolvido em pixels para o favicon ficar legível a 32px.
const GANHO = 4.1;
const CORTE = -35;
const CREME = "#eddfc1";

async function main() {
  await mkdir(destinoApp, { recursive: true });

  // 12% de padding sobre o lado → conteúdo ocupa 76% da caixa.
  const conteudoLado = Math.round(LADO_ICON * 0.76);

  const conteudo = await sharp(origem)
    .extract(bbox)
    .resize({
      width: conteudoLado,
      height: conteudoLado,
      fit: "contain",
      background: "#000000",
    })
    .grayscale()
    .linear(GANHO, CORTE)
    .tint(CREME)
    .sharpen({ sigma: 1.1 })
    .png()
    .toBuffer();

  const { width = 0, height = 0 } = await sharp(conteudo).metadata();

  const composto = await sharp({
    create: {
      width: LADO_ICON,
      height: LADO_ICON,
      channels: 3,
      background: FUNDO,
    },
  })
    .composite([
      {
        input: conteudo,
        left: Math.round((LADO_ICON - width) / 2),
        top: Math.round((LADO_ICON - height) / 2),
        // o preto do JPEG vira o espresso do fundo
        blend: "screen",
      },
    ])
    .png()
    .toBuffer();

  await sharp(composto).toFile(path.join(destinoApp, "icon.png"));

  await sharp(composto)
    .resize(LADO_APPLE, LADO_APPLE)
    .sharpen()
    .png()
    .toFile(path.join(destinoApp, "apple-icon.png"));

  console.log(
    `ícones gerados: app/icon.png (${LADO_ICON}px) e app/apple-icon.png (${LADO_APPLE}px)`,
  );
}

main().catch((erro) => {
  console.error(erro);
  process.exit(1);
});
