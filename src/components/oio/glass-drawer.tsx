'use client'

import type { UIMessage } from 'ai'
import { ChatMessages } from './chat-messages'
import { ChatInput } from './chat-input'

interface GlassDrawerProps {
  messages: UIMessage[]
  isLoading: boolean
  onSendMessage: (message: string) => void
}

export function GlassDrawer({ messages, isLoading, onSendMessage }: GlassDrawerProps) {
  return (
    <section 
      className="fixed bottom-0 left-0 right-0 h-[32vh] z-20 
                 bg-white/[0.03] backdrop-blur-[40px] 
                 border-t border-white/[0.08] 
                 rounded-t-[50px] shadow-[0_-10px_40px_rgba(0,0,0,0.5)]
                 px-6 pt-8 pb-10 
                 flex flex-col"
    >
      <div className="flex items-center gap-4 mb-5 shrink-0">
        <div className="relative">
          <div className="w-14 h-14 rounded-full border border-white/10 p-0.5 bg-zinc-900/40">
            <div className="w-full h-full rounded-full bg-zinc-800/50 flex items-center justify-center overflow-hidden">
              <img
                src="https://github.com/detiillimichel.png"
                alt="Michel"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="text-zinc-500 font-bold text-xs absolute">MD</span>
            </div>
          </div>
          <div className="absolute -right-0.5 -bottom-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-white/90 tracking-tighter leading-none">MICHEL DETILLI</h1>
          <span className="text-[10px] text-zinc-500/80 uppercase tracking-[0.2em] font-bold mt-1">
            Proprietário OIO ONE
          </span>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-hidden">
        <ChatMessages messages={messages} isLoading={isLoading} />
      </div>

      <div className="shrink-0 mt-4">
        <ChatInput onSend={onSendMessage} disabled={isLoading} />
      </div>
    </section>
  )
}

