"use client"

import { useState, type FormEvent } from "react"

const WHATSAPP_NUMBER = "4915255374831"

export function PracticeLeadForm() {
  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const message = `Здравствуйте! Хочу получить практику «Больше всего после расставания мне не хватает...».\nИмя: ${name}\nСвязь: ${contact}`
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-xl border border-teal bg-sky/40 p-5 text-center">
        <p className="text-base font-medium text-navy">
          Открылся WhatsApp — просто отправь сообщение, и я пришлю практику лично в течение дня.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]">
      <input
        type="text"
        required
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-full border border-line bg-background px-5 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none"
      />
      <input
        type="text"
        required
        placeholder="WhatsApp или email"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="rounded-full border border-line bg-background px-5 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-teal focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-[#F5EFEB] transition hover:bg-[#3d6270]"
      >
        Получить практику
      </button>
    </form>
  )
}
