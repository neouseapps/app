'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import { MapPin, Star } from 'lucide-react'

// ─── Data interface ──────────────────────────────────────────────────────────
// CMS-ready: swap mock data with a real API call when available
export interface AttractionData {
  id: number
  name: string
  location: string
  rating: number
  image: string
}

// ─── Mock data ───────────────────────────────────────────────────────────────
const PhuQuocAttractions: AttractionData[] = [
  {
    id: 1,
    name: 'Grand World Phú Quốc',
    location: 'Bắc đảo, Phú Quốc',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Vinpearl Safari',
    location: 'Bắc đảo, Phú Quốc',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Cáp Treo Hòn Thơm',
    location: 'Nam đảo, Phú Quốc',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Bãi Sao Beach',
    location: 'Nam đảo, Phú Quốc',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Chợ Đêm Dinh Cậu',
    location: 'Dương Đông, Phú Quốc',
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
  },
]

// ─── DestinationCard ─────────────────────────────────────────────────────────
function DestinationCard({ attraction }: { attraction: AttractionData }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-white rounded-card overflow-hidden shadow-sm border border-gray-100 cursor-pointer flex-shrink-0 w-full"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-[var(--color-text-default)]">
          {attraction.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-2">
          <MapPin className="w-4 h-4 text-accent-orange flex-shrink-0" />
          <span className="text-sm text-[var(--color-text-dim)]">{attraction.location}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
          <span className="text-sm font-semibold text-[var(--color-text-default)]">
            {attraction.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

// ─── FeaturedAttractions section ──────────────────────────────────────────────
interface FeaturedAttractionsProps {
  attractions?: AttractionData[]
  title?: string
}

export function FeaturedAttractions({
  attractions = PhuQuocAttractions,
  title = 'Điểm tham quan nổi bật',
}: FeaturedAttractionsProps) {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 3500, stopOnInteraction: true })],
  )

  return (
    <section className="py-16 bg-section-bg">
      <div className="max-w-[1440px] mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-navy tracking-tight">{title}</h2>
          <p className="text-gray-500 mt-2">
            Những địa điểm không thể bỏ qua trong hành trình của bạn
          </p>
        </div>

        {/* Embla carousel */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5">
            {attractions.map((attraction) => (
              <div
                key={attraction.id}
                className="basis-[85%] sm:basis-[48%] md:basis-[32%] lg:basis-[24%] xl:basis-[20%] flex-shrink-0"
              >
                <DestinationCard attraction={attraction} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
