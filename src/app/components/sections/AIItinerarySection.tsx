'use client'

// TODO: migrate to useTranslations (next-intl) when [locale] routing is configured

import { useState } from 'react'
import { Bell, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_PROMPTS = [
  '🌴 Lịch trình 3N2Đ cho gia đình',
  '❤️ Kỳ nghỉ trăng mật lãng mạn',
  '🎒 Phượt tự túc 4 ngày',
]

// ─── LeftPanel ────────────────────────────────────────────────────────────────

function LeftPanel() {
  return (
    <div className="lg:w-1/3 flex items-start gap-4">
      <div
        className="w-14 h-14 bg-accent-orange flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-orange-500/30"
        style={{ borderRadius: 'var(--radius-md)' }}
      >
        <Bell className="w-7 h-7" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Hỏi AI để lên lịch trình</h2>
        <p className="text-sm text-[var(--color-text-dim)]">
          Thiết kế chuyến đi cá nhân hóa trong vài giây.
        </p>
      </div>
    </div>
  )
}

// ─── SubmitButton ─────────────────────────────────────────────────────────────

function SubmitButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      type="submit"
      aria-label="Trải nghiệm AI trong app"
      className="bg-accent-orange hover:bg-orange-600 text-white rounded-full h-11 flex items-center justify-center gap-2 px-3 flex-shrink-0 overflow-hidden transition-colors"
      animate={{ width: isHovered ? 'auto' : '2.75rem' }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <ArrowRight className="w-5 h-5 flex-shrink-0" />
      <AnimatePresence>
        {isHovered && (
          <motion.span
            key="label"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.2 }}
            className="whitespace-nowrap text-sm font-semibold pr-2"
          >
            Trải nghiệm AI trong app
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

// ─── ChipCarousel ─────────────────────────────────────────────────────────────

interface ChipCarouselProps {
  chips: string[]
  selectedOption: string
  onSelect: (chip: string) => void
}

function ChipCarousel({ chips, selectedOption, onSelect }: ChipCarouselProps) {
  const [emblaRef] = useEmblaCarousel({ align: 'start', dragFree: true })

  return (
    <div ref={emblaRef} className="overflow-hidden w-full">
      <div className="flex gap-2">
        {chips.map((chip) => {
          const isSelected = chip === selectedOption
          return (
            <button
              key={chip}
              type="button"
              onClick={() => onSelect(chip)}
              className={[
                'whitespace-nowrap rounded-full px-4 py-1.5 text-sm transition-colors flex-shrink-0',
                isSelected
                  ? 'bg-accent-orange text-white border border-accent-orange'
                  : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white',
              ].join(' ')}
            >
              {chip}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── AIInputPill ──────────────────────────────────────────────────────────────

interface AIInputPillProps {
  selectedOption: string
  onChipSelect: (chip: string) => void
}

function AIInputPill({ selectedOption, onChipSelect }: AIInputPillProps) {
  return (
    <div className="rounded-card bg-navy-mid border border-white/10 w-full">
      {/* Selected option display row */}
      <div className="flex items-center gap-3 px-6 py-4">
        <p className="flex-1 text-white text-base min-w-0 truncate">{selectedOption}</p>
        <SubmitButton />
      </div>

      {/* Thin separator */}
      <div className="border-t border-white/10 mx-6" />

      {/* Chip carousel */}
      <div className="px-4 py-3">
        <ChipCarousel chips={QUICK_PROMPTS} selectedOption={selectedOption} onSelect={onChipSelect} />
      </div>
    </div>
  )
}

// ─── AIItinerarySection (main export) ────────────────────────────────────────

export function AIItinerarySection() {
  const [selectedOption, setSelectedOption] = useState(QUICK_PROMPTS[0])

  return (
    <section className="bg-navy border-b border-white/10 w-full relative z-20">
      <div className="max-w-[1600px] mx-auto px-8 py-10 flex flex-col lg:flex-row items-center gap-10">
        <LeftPanel />
        <div className="lg:w-2/3 w-full">
          <AIInputPill
            selectedOption={selectedOption}
            onChipSelect={setSelectedOption}
          />
        </div>
      </div>
    </section>
  )
}
