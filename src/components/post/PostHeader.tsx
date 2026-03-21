'use client'

import { Post, User } from 'types'
import Avatar from '../UI/Avatar' // Ajustei o caminho para garantir que ele ache o Avatar

type Props = {
  user: User
  post: Post
}

function PostHeader({ user, post }: Props) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        {/* OIO ONE - Identidade Fluida */}
        <Avatar user={user} size={42} className="ring-2 ring-white/10" />
        <div className="flex flex-col">
          <span className="text-white text-[13px] font-bold tracking-tighter uppercase">
            OIO ONE
          </span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] font-medium">
            Sensorial Layer
          </span>
        </div>
      </div>

      {/* Menu de Opções (Simples para não dar erro de ícone) */}
      <button className="flex flex-col gap-1 p-2 opacity-50 hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </button>
    </div>
  )
}

export default PostHeader
