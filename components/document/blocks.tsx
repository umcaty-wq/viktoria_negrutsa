import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ----------------------------- Loss / list item ----------------------------- */

export function LossItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="avoid-break flex gap-4">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
      <p className="text-base leading-relaxed text-navy md:text-lg">
        <span className="font-semibold">{title}</span> {children}
      </p>
    </li>
  )
}

/* ------------------------------- Practice card ------------------------------ */

export function PracticeCard({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: ReactNode
}) {
  return (
    <div className="avoid-break my-10 rounded-3xl border border-line bg-beige p-8 shadow-[0_10px_36px_rgba(36,52,74,0.06)] md:p-10">
      <span className="inline-block rounded-full bg-gold px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[#F5EFEB]">
        {label}
      </span>
      <h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-navy text-balance md:text-3xl">
        {title}
      </h3>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-navy md:text-lg">{children}</div>
    </div>
  )
}

/* ----------------------------- Checklist item ------------------------------- */

export function CheckItem({ index, children }: { index: string; children: ReactNode }) {
  return (
    <li className="avoid-break flex items-start gap-5 rounded-2xl border border-line bg-background p-5 shadow-[0_6px_20px_rgba(36,52,74,0.05)] transition-shadow hover:shadow-[0_10px_28px_rgba(36,52,74,0.09)]">
      <span className="font-serif text-3xl font-semibold leading-none text-gold">{index}</span>
      <p className="pt-1 text-base leading-relaxed text-navy">{children}</p>
    </li>
  )
}

/* ----------------------------- Objection card ------------------------------- */

export function Objection({ quote, children }: { quote: string; children: ReactNode }) {
  return (
    <div className="avoid-break rounded-xl border border-line bg-background p-6 md:p-8">
      <p className="font-serif text-xl italic leading-snug text-navy md:text-2xl">{`«${quote}»`}</p>
      <p className="mt-4 text-base leading-relaxed text-navy">{children}</p>
    </div>
  )
}

/* --------------------------------- Stat ------------------------------------- */

export function Stat({ value, children }: { value: string; children: ReactNode }) {
  return (
    <div className="avoid-break text-center">
      <p className="font-serif text-[5.5rem] font-semibold leading-none text-navy md:text-[8rem]">{value}</p>
      <p className="mx-auto mt-2 max-w-md text-base leading-relaxed text-teal md:text-lg">{children}</p>
    </div>
  )
}

/* ------------------------------- Outcome row -------------------------------- */

export function OutcomeRow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "avoid-break flex gap-3 border-l-2 border-teal pl-5 text-base leading-relaxed text-navy md:text-lg",
        className,
      )}
    >
      {children}
    </p>
  )
}
