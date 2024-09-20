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
    <div className="flex flex-col min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 bg-background p-4 shadow-md z-10">
        <div className="flex justify-between text-sm text-muted-foreground max-w-screen-xl mx-auto">
          <span>Words: {wordCount}</span>
          <span>Characters: {charCount}</span>
        </div>
      </div>
      <div className="flex-grow p-4 pt-16 pb-40 sm:pb-4 w-full max-w-screen-xl mx-auto">
        <div className="h-full w-full">
          <Textarea 
            placeholder="Start typing here..." 
            className="w-full h-[14lh] sm:h-full min-h-[14lh] resize-none leading-normal overflow-x-hidden"
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ boxSizing: 'border-box', width: '100%' }}
          />
        </div>
      </div>
    </div>
  )
}