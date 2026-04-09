'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Hotel, Utensils, Map, Ticket, ShoppingBag, Plane, Car, Bike, Sparkles, Calendar, MoreHorizontal } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { useTranslations } from 'next-intl'

// ─── Static assets ────────────────────────────────────────────────────────────

const ICONS = [Hotel, Utensils, Map, Ticket, ShoppingBag, Plane, Car, Bike, Sparkles, Calendar, MoreHorizontal]
const SECTOR_KEYS = ['accommodation', 'food', 'tours', 'attractions', 'shopping', 'scheduledTransport', 'onDemandTransport', 'vehicleRental', 'spa', 'events', 'other']

const CARD_COLORS = [
  { text: '#2563EB', bg: '#EFF6FF' }, // blue      — Lưu trú
  { text: '#16A34A', bg: '#F0FDF4' }, // green     — Ẩm thực
  { text: '#EA580C', bg: '#FFF7ED' }, // orange    — Tour
  { text: '#7C3AED', bg: '#F5F3FF' }, // purple    — Điểm tham quan
  { text: '#DB2777', bg: '#FDF2F8' }, // pink      — Mua sắm
  { text: '#0D9488', bg: '#F0FDFA' }, // teal      — Vận tải
  { text: '#EA580C', bg: '#FFF7ED' }, // orange    — Đưa đón
  { text: '#16A34A', bg: '#F0FDF4' }, // green     — Thuê phương tiện
  { text: '#7C3AED', bg: '#F5F3FF' }, // purple    — Spa
  { text: '#DB2777', bg: '#FDF2F8' }, // pink      — Sự kiện
  { text: '#0D9488', bg: '#F0FDFA' }, // teal      — Khác
]

// Slide 1: indices 0–5 (3/3), Slide 2: indices 6–10 (3/2)
const SLIDES = [
  [[0, 1, 2], [3, 4, 5]],
  [[6, 7, 8], [9, 10]],
]

function scrollToRegister() {
  const el = document.getElementById('register')
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top: y, behavior: 'smooth' })
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function IndustryCard({
  icon: Icon,
  label,
  desc,
  color,
}: {
  icon: React.ElementType
  label: string
  desc: string
  color: { text: string; bg: string }
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="w-[320px] h-[140px]">
      <div
        className="w-full h-full rounded-[14px] p-4 flex flex-row items-center gap-3 transition-all duration-200"
        style={{
          backgroundColor: hovered ? color.bg + '66' : '#ffffff',
          boxShadow: hovered
            ? '0 10px 30px -4px rgba(0,0,0,0.12), 0 4px 12px -2px rgba(0,0,0,0.08)'
            : '0 1px 3px 0 rgba(0,0,0,0.06)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left: icon */}
        <div className="w-14 h-14 shrink-0 rounded-[10px] flex items-center justify-center" style={{ backgroundColor: color.bg }}>
          <Icon className="w-6 h-6" style={{ color: color.text }} aria-hidden="true" />
        </div>
        {/* Right: text */}
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <p className="text-xl font-medium leading-6 text-[var(--color-text-default)]">
            {label}
          </p>
          <p className="text-sm text-[var(--color-text-dim)] leading-5 line-clamp-2">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Slideshow ────────────────────────────────────────────────────────────────

export function IndustryCarousel({ onSectorSelect }: { onSectorSelect?: (key: string) => void }) {
  const t = useTranslations('IndustryCarousel')
  const [slide, setSlide] = useState(0)

  const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => ({
    icon: ICONS[i],
    label: t(`items.${i}.label`),
    desc: t(`items.${i}.desc`),
    sectorKey: SECTOR_KEYS[i],
    color: CARD_COLORS[i],
  }))

  const renderCard = (i: number) => (
    <IndustryCard
      key={i}
      icon={cards[i].icon}
      label={cards[i].label}
      desc={cards[i].desc}
      color={cards[i].color}
    />
  )

  const currentRows = SLIDES[slide]

  return (
    <section id="solutions" className="py-24 bg-white">
      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-8 mb-12 text-center">
        <h3 className="text-[34px] md:text-[40px] font-display font-medium text-[var(--color-text-default)] leading-[1.3] mb-4">
          {t('title')}
        </h3>
        <p className="text-[var(--color-text-dim)] text-lg leading-relaxed max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      {/* Slide area */}
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-center gap-4">
          {/* Prev button */}
          <button
            onClick={() => setSlide(0)}
            disabled={slide === 0}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--color-border-default)] flex items-center justify-center transition-all hover:bg-[var(--color-bg-dim)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-[var(--color-text-default)]" />
          </button>

          {/* Cards grid */}
          <div className="flex-1 flex flex-col gap-6">
            {currentRows.map((row, rowIdx) => (
              <div key={rowIdx} className="flex flex-wrap gap-6 justify-center">
                {row.map(renderCard)}
              </div>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => setSlide(1)}
            disabled={slide === 1}
            className="flex-shrink-0 w-10 h-10 rounded-full border border-[var(--color-border-default)] flex items-center justify-center transition-all hover:bg-[var(--color-bg-dim)] disabled:opacity-30 disabled:pointer-events-none"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-[var(--color-text-default)]" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === slide ? 'bg-[var(--color-text-default)] w-4' : 'bg-[var(--color-border-default)]'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Single CTA */}
        <div className="flex justify-center pt-6">
          <Button variant="primary" size="md" onClick={scrollToRegister}>
            {t('contactCta')}
          </Button>
        </div>
      </div>
    </section>
  )
}
