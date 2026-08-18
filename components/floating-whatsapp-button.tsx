'use client'

import { useState, useEffect } from 'react'

export function FloatingWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappUrl = 'https://wa.me/4915255374831'

  useEffect(() => {
    const handleScroll = () => {
      // Показываем кнопку после 2 экранов (примерно 1600px)
      setIsVisible(window.scrollY > 1600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-full border border-gold/40 bg-navy hover:bg-[#2d4159] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.32)] text-white font-semibold text-base tracking-wide"
      title="Записаться на встречу в WhatsApp"
    >
      <svg
        className="w-5 h-5 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.935 1.22l-.354.21-.365-.118L7.733 5.77l.728 2.182.151.382-.296.245a9.863 9.863 0 003.477 5.645l.359.3.372-.064 2.296-.378-.017-.755c.016-.541.231-1.046.63-1.435a9.878 9.878 0 00-1.313-6.602zm7.573 12.817h-.003a10.046 10.046 0 01-5.239-1.437l-.376-.225-.389.064-2.384.393.766-2.295-.156-.391-.24-.293a10.006 10.006 0 011.463-5.233 9.88 9.88 0 015.155-3.237 9.897 9.897 0 011.348 19.395zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
      <span>Записаться · 5€</span>
    </a>
  )
}
