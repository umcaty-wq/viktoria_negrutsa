import { cn } from "@/lib/utils"

export function SessionStructure() {
  const steps = [
    {
      num: "01",
      title: "Ты рассказываешь свою ситуацию",
      description: "Я слушаю и задаю уточняющие вопросы, чтобы понять глубину твоей боли и сценарии, которые её поддерживают.",
    },
    {
      num: "02",
      title: "Я показываю, что именно держит тебя в этом",
      description: "Без шаблонов, без общих фраз. Конкретные механизмы твоей психики, которые заставляют снова возвращаться к боли.",
    },
    {
      num: "03",
      title: "Ты уходишь с пониманием и планом",
      description: "Ясность, что происходит. Конкретный план действий, что с этим делать. И силы, чтобы его воплотить.",
    },
  ]

  return (
    <div className="space-y-8">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-6">
          {/* Number */}
          <div className="flex-shrink-0">
            <span className="font-serif text-4xl font-semibold leading-none text-gold md:text-5xl">
              {step.num}
            </span>
          </div>
          {/* Content */}
          <div className="flex-1">
            <h4 className="font-serif text-lg font-semibold leading-tight text-[#F5EFEB] md:text-xl text-balance">
              {step.title}
            </h4>
            <p className="mt-2 text-base leading-relaxed text-[#E5D9CF]">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
