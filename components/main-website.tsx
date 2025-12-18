"use client"

import { AboutSection } from "@/components/sections/about-section"
import { PhotoGallery } from "@/components/sections/photo-gallery"
import { LittleThings } from "@/components/sections/little-things"
import { InteractiveGames } from "@/components/sections/interactive-games"
import { WishSection } from "@/components/sections/wish-section"
import { CakeCeremony } from "@/components/sections/cake-ceremony"
import { ComplimentsGarden } from "@/components/sections/compliments-garden"
import { LetterSection } from "@/components/sections/letter-section"
import { Timeline } from "@/components/sections/timeline"
import { HiddenSection } from "@/components/sections/hidden-section"
import { PuzzleGame } from "@/components/sections/puzzle-game"
import { FinalSurprise } from "@/components/sections/final-surprise"
import { Footer } from "@/components/footer"

export function MainWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-peach-50">
      <AboutSection />
      <PhotoGallery />
      <LittleThings />
      <InteractiveGames />
      <WishSection />
      <CakeCeremony />
      <ComplimentsGarden />
      <LetterSection />
      <Timeline />
      <HiddenSection />
      <PuzzleGame />
      <FinalSurprise />
      <Footer />
    </div>
  )
}
