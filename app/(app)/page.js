'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Pen } from 'lucide-react'
import { CopyIcon } from "@/components/Icons"

export default function Home() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('Morning');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setTimeOfDay('Morning');
    } else if (currentHour < 18) {
      setTimeOfDay('Afternoon');
    } else {
      setTimeOfDay('Evening');
    }
  });

  useEffect(() => {
    const words = text.trim().split(/\s+/)
    setWordCount(words.length === 1 && words[0] === '' ? 0 : words.length)
  }, [text])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">      
      <header className="p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10 bg-white backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:bg-gray-800/95 shadow-sm">        
        <Pen className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">{wordCount} words</span>
          <Button variant="ghost" size="icon" className="ml-auto" onClick={handleCopy}>
            <CopyIcon className="h-5 w-5" />
            <span className="sr-only">Share to email</span>
          </Button>
        </div>
      </header>
      <main className="flex-grow relative pt-16">
        <Textarea
          className="w-full h-screen resize-none bg-transparent outline-none text-black placeholder:text-gray-400 dark:placeholder:text-gray-500 dark:text-white absolute left-0 top-0 mx-auto overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words font-mono text-base leading-relaxed md:text-lg md:leading-loose border-none"
          placeholder={`Good ${timeOfDay}! Let's start Writing. Once you are done click the copy button to copy the text.`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            scrollbarWidth: 'thin',
            scrollBehavior: 'smooth',
            scrollPaddingBottom: '0px',
            padding: 'calc(1em + 64px) max(-372px + 50vw, 1em) 3em',
          }}
        />
      </main>
    </div>
  )
}