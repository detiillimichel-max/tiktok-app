'use client'

import { Post } from 'types'
import LikeButton from './LikeButton'
import { MessageCircle, Share2 } from 'lucide-react' // Ícones modernos

type Props = {
  id: string
  post: Post
}

function PostFooter({ id, post }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* INFO DO POST: Flutuando sobre o vídeo */}
      <div className="flex flex-col">
        <span className="text-white font-bold text-lg tracking-tighter">
          @{post.expand?.profile?.name || 'OIO User'}
        </span>
        <p className="text-zinc-200 text-sm line-clamp-2 mt-1 leading-relaxed">
          {post.text}
        </p>
      </div>

      {/* AÇÕES: Botões flutuantes à direita (Estilo Social Grande) */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-30">
        <div className="flex flex-col items-center gap-1 group">
          <LikeButton post={post} id={id} />
          <span className="text-[10px] text-white font-medium uppercase">Like</span>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
            <MessageCircle size={24} className="text-white" />
          </div>
          <span className="text-[10px] text-white font-medium uppercase">Chat</span>
        </div>

        <div className="flex flex-col items-center gap-1 cursor-pointer active:scale-90 transition-transform">
          <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
            <Share2 size={24} className="text-white" />
          </div>
          <span className="text-[10px] text-white font-medium uppercase">Share</span>
        </div>
      </div>
    </div>
  )
}

export default PostFooter
