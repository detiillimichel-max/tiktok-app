'use client'

import { useRef, useEffect } from 'react'
import type { UIMessage } from 'ai'
import { cn } from '@/lib/utils'

interface ChatMessagesProps {
  messages: UIMessage[]
  isLoading?: boolean
}

function getMessageText(message: UIMessage): string {
  if (!message.parts || !Array.isArray(message.parts)) return ''
  return message.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('')
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  if (messages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full opacity-20">
        <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-zinc-400 text-center">
          Conexão Orgânica Ativa
        </p>
      </div>
    )
  }

  return (
    <div
      ref={scrollRef}
      className="flex flex-col gap-4 max-h-[18vh] overflow-y-auto pr-2 mb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
    >
      {messages.map((message) => {
        const text = getMessageText(message)
        if (!text) return null

        return (
          <div
            key={message.id}
            className={cn(
              'px-4 py-3 rounded-[20px] text-sm max-w-[85%] break-words tracking-tight transition-all duration-300',
              message.role === 'user'
                ? 'self-end bg-emerald-500/10 text-emerald-100 border border-emerald-500/20'
                : 'self-start bg-white/5 text-zinc-200 border border-white/5'
            )}
          >
            {text}
          </div>
        )
      })}
      
      {isLoading && (
        <div className="self-start px-4 py-3 rounded-[20px] bg-white/5 border border-white/5">
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      )}
    </div>
  )
}

