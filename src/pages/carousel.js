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
import { useState, useMemo, useEffect } from "react"

// Carousel page showing one slide at a time with autoplay and captions.
export default function CarouselSpacing() {
  const slides = [
    { src: "/portfolio/carouselPictures/profSmile2.jpg", caption: "Taking a headshot at a garden in Secaucus, NJ (August 2024)" },
    { src: "/portfolio/carouselPictures/Team.jpg", caption: "My Capital One team and I after our final presentation (August 2025)" },
    { src: "/portfolio/carouselPictures/C1_Office.jpg", caption: "Me in the Capital One Office - McLean, VA (July 2025)" },
    { src: "/portfolio/carouselPictures/Family.jpg", caption: "My family celebrating my 20th birthday with my dog Wowow" },
    { src: "/portfolio/carouselPictures/Hike.jpg", caption: "Hiking to the top of Whiteface Mountain (4867 ft above sea level) " },
    { src: "/portfolio/carouselPictures/HackSocial.jpg", caption: "Cornell Hack4Impact's end of year social (May 2025) " },
    { src: "/portfolio/carouselPictures/SF_Thing.jpg", caption: "Visiting the Palace of Fine Arts in San Francisco, CA" },
  ]

  // create a single autoplay plugin instance so we can reset it on manual interactions
  const autoplay = useMemo(() => Autoplay({ delay: 9000, stopOnInteraction: false }), [])
  const [emblaApi, setEmblaApi] = useState(null)

  // reset autoplay timer whenever the selected slide changes (manual or programmatic)
  useEffect(() => {
    if (!emblaApi || !autoplay) return
    const onSelect = () => {
      if (typeof autoplay.reset === "function") {
        autoplay.reset()
      }
    }

    emblaApi.on("select", onSelect)
    return () => {
      emblaApi?.off("select", onSelect)
    }
  }, [emblaApi, autoplay])

  // also reset autoplay when the user interacts (click/tap/drag) inside the carousel viewport
  useEffect(() => {
    if (!emblaApi || !autoplay) return

    const root = typeof emblaApi.rootNode === "function" ? emblaApi.rootNode() : null
    const resetIfNeeded = () => {
      if (typeof autoplay.reset === "function") autoplay.reset()
    }

    if (root) {
      root.addEventListener("pointerup", resetIfNeeded)
      root.addEventListener("click", resetIfNeeded)
    }

    return () => {
      if (root) {
        root.removeEventListener("pointerup", resetIfNeeded)
        root.removeEventListener("click", resetIfNeeded)
      }
    }
  }, [emblaApi, autoplay])

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <Carousel
          className="w-full"
          plugins={[autoplay]}
          opts={{ loop: true }}
          setApi={setEmblaApi}
        >
          <CarouselContent>
            {slides.map(({ src, caption }, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <Card>
                    <CardContent className="p-0 overflow-hidden">
                      <div className="aspect-[4/3] w-full">
                        <img src={src} alt={`slide-${index + 1}`} className="h-full w-full object-cover" />
                      </div>
                      <div className="p-4 text-center text-sm text-muted-foreground">
                        {caption}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselIndicators />
        </Carousel>
      </div>
    </div>
  )
}
