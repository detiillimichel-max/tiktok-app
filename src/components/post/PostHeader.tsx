'use client'

import { Post, User } from 'types'
import Avatar from 'components/UI/Avatar'
import { MoreVertical } from 'lucide-react'

type Props = {
  user: User
  post: Post
}

function PostHeader({ user, post }: Props) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        {/* OIO ONE - Identidade Fluida */}
        <Avatar user={user} size={42} className="ring-white/20" />
        <div className="flex flex-col">
          <span className="text-white text-sm font-semibold tracking-tight uppercase">
            OIO ONE
          </span>
          <span className="text-zinc-400 text-[10px] uppercase tracking-[0.2em] font-medium">
            Sensorial Layer
          </span>
        </div>
      </div>

      {/* Salto Quântico: Menu de Opções sutil */}
      <button className="p-2 text-white/50 hover:text-white transition-colors active:scale-90">
        <MoreVertical size={20} />
      </button>
    </div>
  )
}

export default PostHeader
