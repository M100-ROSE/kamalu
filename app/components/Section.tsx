import type { ReactNode } from "react";

type Tom = "paper" | "butter" | "ink" | "wine";

type SectionProps = {
  id?: string;
  tom?: Tom;
  pattern?: "papel";
  children: ReactNode;
  className?: string;
};

const tons: Record<Tom, string> = {
  paper: "bg-paper text-ink",
  butter: "bg-butter text-ink",
  ink: "bg-ink text-paper",
  wine: "bg-wine text-paper",
};

/** Seção base: 96px desktop / 64px mobile, container de 1120px (spec §4). */
export default function Section({
  id,
  tom = "paper",
  pattern,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative ${tons[tom]} py-16 md:py-24 ${className}`}
    >
      {pattern === "papel" && (
        <div
          aria-hidden="true"
          className="pattern-papel absolute inset-0"
        />
      )}
      <div className="relative mx-auto w-full max-w-[1120px] px-5 md:px-10">
        {children}
      </div>
    </section>
  );
}
