import { Heading } from "./primitives"
import { WhatsAppButton } from "./whatsapp-cta"

export function Cover() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,_#31465f,_#24344a)] px-6 py-24 text-[#F5EFEB] md:px-12 md:py-36">
      <div className="mx-auto grid w-full max-w-5xl gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div className="flex flex-col">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold">
              Психологический разбор
            </span>
            <span className="h-px w-10 bg-[#567C8D]/50" />
            <span className="font-mono text-xs uppercase tracking-[0.35em] text-gold">+ практика</span>
          </div>

          <Heading as="h1" className="text-3xl leading-[1.15] text-[#F5EFEB] sm:text-4xl md:text-7xl md:leading-[1.08]">
            Как пережить расставание, перестать цепляться за дефицитарных мужчин и вырасти — в личности,
            деньгах и отношениях
          </Heading>

          <p className="mt-8 max-w-md text-base leading-relaxed text-[#F5EFEB]/80">
            Это не статья про «просто отпусти». Разбор того, что реально происходит в психике, когда
            отношения заканчиваются — и как это влияет на твоё окружение, деньги и доход.
          </p>

          <div className="mt-10">
            <WhatsAppButton variant="dark">Записаться на диагностику</WhatsAppButton>
            <p className="mt-3 text-sm text-[#F5EFEB]/60">
              Диагностика — 5€ вместо обычных 80€ · беру ограниченное число клиентов в месяц
            </p>
            <p className="mt-1 text-xs text-[#F5EFEB]/40">Конфиденциально — всё остаётся между нами</p>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative">
          <div className="aspect-[3/4] w-full overflow-hidden rounded-3xl border border-gold/30 bg-[#28384c] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <img
              src="images/victoria.jpg"
              alt="Виктория Негруца, глубинный психолог"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="mt-4 rounded-2xl bg-[#F5EFEB] px-5 py-4 text-navy shadow-[0_12px_30px_rgba(0,0,0,0.15)]">
            <p className="font-serif text-lg font-semibold leading-tight">Виктория Негруца</p>
            <p className="mt-1 text-sm leading-relaxed text-teal">
              Глубинный психолог · кандидат психологических наук · 7 лет практики
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
