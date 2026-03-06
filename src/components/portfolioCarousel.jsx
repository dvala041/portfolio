import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselIndicators,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

/**
 * PortfolioCarousel
 * Props:
 * - slides: Array of { src: string, caption?: string } or string[] (image paths in /public)
 * - maxWidth: tailwind max-width class (e.g. 'max-w-2xl')
 * - autoplay: boolean
 * - delay: autoplay delay in ms
 * - loop: boolean
 * - aspect: aspect ratio (e.g. '16/9')
 * - showIndicators: boolean
 */
export default function PortfolioCarousel({
  slides = [],
  maxWidth = "max-w-2xl",
  autoplay = true,
  delay = 5000,
  loop = true,
  aspect = "16/9",
  showIndicators = true,
}) {
  const plugins = React.useMemo(() => (autoplay ? [Autoplay({ delay, stopOnInteraction: false })] : []), [autoplay, delay])

  return (
    <div className={`w-full ${maxWidth} overflow-hidden`}>
      <Carousel className="w-full" plugins={plugins} opts={loop ? { loop: true } : {}}>
        <CarouselContent>
          {slides.map((slide, index) => {
            const src = typeof slide === 'string' ? slide : slide.src
            const caption = typeof slide === 'object' ? slide.caption : null
            return (
            <CarouselItem key={index}>
              <div className="p-2">
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className={`aspect-[${aspect}] w-full`}>
                      <img src={src} alt={`slide-${index + 1}`} className="h-full w-full object-cover" />
                    </div>
                    {caption && (
                      <div className="p-4 text-center text-sm text-gray-400">
                        {caption}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )})}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        {showIndicators && <CarouselIndicators />}
      </Carousel>
    </div>
  )
}
