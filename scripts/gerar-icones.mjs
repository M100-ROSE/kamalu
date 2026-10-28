import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const raiz = process.cwd();
const origem = path.join(raiz, "public", "img", "kamalu-icone.jpg");
const destinoApp = path.join(raiz, "app");

const FUNDO = "#2b1a14";
const LADO_ICON = 512;
const LADO_APPLE = 180;

// bbox do conteúdo do ícone (spec §8): x 77–357, y 108–191
const bbox = { left: 77, top: 108, width: 280, height: 83 };

async function main() {
  await mkdir(destinoApp, { recursive: true });

  // 12% de padding sobre o lado → conteúdo ocupa 76% da largura.
  const conteudoLargura = Math.round(LADO_ICON * 0.76);

  const conteudo = await sharp(origem)
    .extract(bbox)
    .resize({ width: conteudoLargura })
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
        // remove o preto do JPEG sobre o espresso
        blend: "screen",
      },
    ])
    .png()
    .toBuffer();

  await sharp(composto).toFile(path.join(destinoApp, "icon.png"));

  await sharp(composto)
    .resize(LADO_APPLE, LADO_APPLE)
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
