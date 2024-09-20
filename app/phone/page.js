"use client"

import { useState, useEffect } from 'react'
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [text, setText] = useState('')
  const [wordCount, setWordCount] = useState(0)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    const words = text.trim().split(/\s+/)
    setWordCount(words.length === 1 && words[0] === '' ? 0 : words.length)
    setCharCount(text.length)
  }, [text])

  return (
    <div className="flex flex-col h-screen bg-background">
      <div className="sticky top-0 bg-background p-4 shadow-md z-10">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Words: {wordCount}</span>
          <span>Characters: {charCount}</span>
        </div>
      </div>
      <div className="flex-grow p-4 pb-40 sm:pb-4">
        <Textarea 
          placeholder="Start typing here..." 
          className="w-full h-full min-h-[14lh] sm:min-h-0 resize-none leading-normal"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  )
}