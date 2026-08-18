import { cn } from "@/lib/utils"

export interface TestimonialProps {
  quote: string
  author: string
  age?: number
  additional?: string
  whatsappLink?: string
  paymentLink?: string
  layout?: "default" | "compact"
  tone?: "beige" | "navy"
}

export function Testimonial({
  quote,
  author,
  age,
  additional,
  whatsappLink,
  paymentLink,
  layout = "default",
  tone = "beige",
}: TestimonialProps) {
  const bgClass = tone === "navy" ? "bg-navy" : "bg-beige"
  const textClass = tone === "navy" ? "text-[#F5EFEB]" : "text-navy"
  const accentClass = "text-gold"

  if (layout === "compact") {
    return (
      <div className={cn("avoid-break rounded-xl px-6 py-8 md:px-8 md:py-10", bgClass)}>
        <div className="space-y-4">
          <p className={cn("font-serif text-lg italic leading-relaxed text-pretty md:text-xl", textClass)}>
            {`«${quote}»`}
          </p>
        {additional && (
          <p className={cn("text-sm leading-relaxed", textClass)}>
            {additional}
          </p>
        )}
        <p className={cn("text-xs font-semibold uppercase tracking-[0.1em] leading-tight md:text-sm pt-4", accentClass)}>
          — {author}{age && `, ${age}`}
        </p>
        {(whatsappLink || paymentLink) && (
          <div className="flex gap-2 flex-wrap pt-4">
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-current hover:bg-white/30 transition"
              >
                WhatsApp
              </a>
            )}
            {paymentLink && (
              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-current hover:bg-white/30 transition"
              >
                Оплатить
              </a>
            )}
          </div>
        )}
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "avoid-break rounded-3xl px-8 py-12 shadow-[0_16px_44px_rgba(36,52,74,0.08)] md:px-10 md:py-14",
        bgClass,
      )}
    >
      <div className="space-y-6">
        <span className="font-serif text-4xl leading-none text-gold">&ldquo;</span>
        <p className={cn("font-serif text-2xl italic leading-relaxed text-pretty md:text-[1.75rem]", textClass)}>
          {quote}
        </p>
        {additional && (
          <p className={cn("text-base leading-relaxed", textClass)}>
            {additional}
          </p>
        )}
        <p className={cn("text-sm font-semibold uppercase tracking-[0.1em] leading-tight md:text-base pt-6", accentClass)}>
          — {author}{age && `, ${age}`}
        </p>
        {(whatsappLink || paymentLink) && (
          <div className="flex gap-3 flex-wrap pt-6">
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold rounded-full bg-white/20 text-current hover:bg-white/30 transition"
              >
                WhatsApp
              </a>
            )}
            {paymentLink && (
              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold rounded-full bg-white/20 text-current hover:bg-white/30 transition"
              >
                Оплатить
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
