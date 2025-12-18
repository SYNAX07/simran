"use client"

import { useState } from "react"
import { PasswordEntry } from "@/components/password-entry"
import { StorySlides } from "@/components/story-slides"
import { MainWebsite } from "@/components/main-website"
import { CursorTrail } from "@/components/cursor-trail"

export default function Home() {
  const [phase, setPhase] = useState<"password" | "story" | "main">("password")

  return (
    <main className="min-h-screen">
      <CursorTrail />
      {phase === "password" && <PasswordEntry onSuccess={() => setPhase("story")} />}
      {phase === "story" && <StorySlides onComplete={() => setPhase("main")} />}
      {phase === "main" && <MainWebsite />}
    </main>
  )
}
