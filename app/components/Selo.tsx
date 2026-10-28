type SeloProps = {
  children: string;
};

/** Selo de borda viva com ponto magenta de 8px (spec §5). */
export default function Selo({ children }: SeloProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-current px-[10px] py-1 text-[11px] font-bold uppercase leading-[1.2] tracking-[0.16em]">
      <span
        aria-hidden="true"
        className="h-2 w-2 shrink-0 rounded-full bg-magenta"
      />
      {children}
    </span>
  );
}
