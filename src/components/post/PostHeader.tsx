'use client'

import { Post, User } from 'types'
import Avatar from '../UI/Avatar'

type Props = {
  user: User
  post: Post
}

export default function PostHeader({ user, post }: Props) {
  return (
    <div className="flex items-center justify-between w-full px-4 pt-4">
      <div className="flex items-center gap-3">
        {/* Camada de Identidade OIO ONE */}
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

      {/* Salto Quântico: Menu sutil em CSS */}
      <div className="flex flex-col gap-1 p-2 opacity-50 active:scale-90 transition-all cursor-pointer">
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  )
}
