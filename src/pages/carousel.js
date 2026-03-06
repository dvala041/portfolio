import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselIndicators,
} from "@/components/ui/carousel"

// Carousel page showing one slide at a time with manual navigation and captions.
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

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        <Carousel
          className="w-full"
          opts={{ loop: true }}
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
          <CarouselIndicators />
        </Carousel>
      </div>
    </div>
  )
}
