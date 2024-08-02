/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dpD5ATZRkLM
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
'use client'; 

import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CopyIcon } from "@/components/icons"



const Writer = () => {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    setCharCount(newText.length);
    setWordCount(newText.trim().split(/\s+/).filter(word => word.length > 0).length);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  }

  return (
      <>
        <div className="flex-1 pb-6 flex flex-col">
          <Textarea
            placeholder="Good Morning! Start Writing..."
            value={text}
            onChange={handleChange}
            className="w-full flex-1 resize-none p-4 rounded-lg border border-input focus:border-primary focus:ring-1 focus:ring-primary"
            />
        </div>
        <div className="bg-muted px-6 py-4 flex justify-between items-center border-t">
          <div className="text-sm text-muted-foreground">
            <span id="word-count">{wordCount}</span> words, <span id="char-count">{charCount}</span> characters
          </div>
          <Button variant="ghost" size="icon" className="ml-auto" onClick={handleCopy}>
            <CopyIcon className="h-5 w-5" />
            <span className="sr-only">Share to email</span>
          </Button>
        </div>
      </>
    );
}

export default Writer;