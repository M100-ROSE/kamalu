type LabelProps = {
  children: string;
  alinhamento?: "esquerda" | "centro";
  className?: string;
};

/** Label 11px caixa alta com filete caramelo de 32px (spec §4). */
export default function Label({
  children,
  alinhamento = "esquerda",
  className = "",
}: LabelProps) {
  const centro = alinhamento === "centro";

  return (
    <div
      className={`flex flex-col gap-3 ${
        centro ? "items-center" : "items-start"
      } ${className}`}
    >
      <span className="text-label uppercase">{children}</span>
      <span aria-hidden="true" className="h-px w-8 bg-caramel" />
    </div>
  );
}
