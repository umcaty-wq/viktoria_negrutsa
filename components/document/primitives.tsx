import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/* ---------------------------------- Section ---------------------------------- */

export function Section({
  page,
  eyebrow,
  children,
  className,
  tone = "white",
}: {
  page?: string
  eyebrow?: string
  children: ReactNode
  className?: string
  tone?: "white" | "beige" | "sky" | "navy"
}) {
  const toneClass = {
    white: "bg-background text-foreground",
    beige: "bg-beige text-foreground",
    sky: "bg-sky text-foreground",
    navy: "bg-navy text-[#F5EFEB]",
  }[tone]

  return (
    <section
      className={cn(
        "avoid-break px-6 py-20 md:px-12 md:py-28",
        tone === "navy" &&
          "bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,_#31465fff,_#24344a)]",
        toneClass,
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col">
        {(page || eyebrow) && (
          <div className="mb-10 flex items-center gap-4">
            {page && (
              <span className="font-mono text-xs tracking-[0.35em] text-gold">
                {page}
              </span>
            )}
            <span
              className={cn(
                "h-px flex-1",
                tone === "navy" ? "bg-[#567C8D]/40" : "bg-line",
              )}
            />
            {eyebrow && (
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
                {eyebrow}
              </span>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

/* --------------------------------- Heading ---------------------------------- */

export function Heading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode
  className?: string
  as?: "h1" | "h2" | "h3"
}) {
  return (
    <Tag
      className={cn(
        "font-serif font-semibold leading-[1.08] tracking-tight text-balance",
        Tag === "h1" && "text-5xl md:text-7xl",
        Tag === "h2" && "text-3xl md:text-5xl",
        Tag === "h3" && "text-2xl md:text-3xl",
        className,
      )}
    >
      {children}
    </Tag>
  )
}

/* ------------------------------- Body text ---------------------------------- */

export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-lg leading-relaxed text-[#3f5a72] md:text-xl", className)}>{children}</p>
}

export function Body({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("text-base leading-relaxed text-navy md:text-lg", className)}>{children}</p>
}

/* ------------------------------- Pull quote --------------------------------- */

/* -------------------------------- Accent Quote -------------------------------- */

export function AccentQuote({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-serif text-2xl italic leading-snug text-navy text-pretty md:text-[1.75rem]",
        className,
      )}
    >
      {children}
    </p>
  )
}

export function PullQuote({
  children,
  tone = "sky",
}: {
  children: ReactNode
  tone?: "sky" | "navy" | "plain"
}) {
  if (tone === "plain") {
    return (
      <blockquote className="avoid-break my-10 border-l-2 border-gold pl-6">
        <AccentQuote>{children}</AccentQuote>
      </blockquote>
    )
  }

  return (
    <blockquote
      className={cn(
        "avoid-break my-12 rounded-2xl px-8 py-10 text-center shadow-[0_8px_30px_rgba(36,52,74,0.08)]",
        tone === "sky" ? "bg-sky" : "bg-navy",
      )}
    >
      <span className="font-serif text-5xl leading-none text-gold">
        &ldquo;
      </span>
      <AccentQuote className={cn(tone === "sky" ? "text-navy" : "text-[#F5EFEB]")}>
        {children}
      </AccentQuote>
    </blockquote>
  )
}
