"use client"

import { Printer } from "lucide-react"
import { WhatsAppButton } from "./whatsapp-cta"

export function Toolbar() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-line bg-background/90 shadow-[0_1px_0_rgba(36,52,74,0.04)] backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-navy font-serif text-base italic text-[#F5EFEB]">
            V
          </span>
          <div className="leading-tight">
            <p className="font-serif text-sm font-semibold text-navy">Victoria Negrutsa</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">Психологический разбор</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <WhatsAppButton
            variant="light"
            className="!px-4 !py-2 !text-xs !gap-1.5 [&_svg]:h-3.5 [&_svg]:w-3.5"
          >
            <span className="hidden sm:inline">Записаться</span>
          </WhatsAppButton>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 rounded-full border border-teal px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-teal transition-colors hover:bg-teal hover:text-[#F5EFEB]"
            aria-label="Сохранить PDF"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            <span className="hidden md:inline">PDF</span>
          </button>
        </div>
      </div>
    </header>
  )
}
