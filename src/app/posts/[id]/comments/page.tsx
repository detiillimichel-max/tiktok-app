import InfiniteComments from 'components/comments/InfiniteComments'
import { Avatar, Date } from 'components/UI'
import { Post } from 'types'
import { api_Url } from 'utils/consts'
import DeleteButton from './DeleteButton'
import { useUser } from 'utils/useUser'

type PageProps = {
  params: Promise<{
    id: string
  }>
  children?: React.ReactNode
}

async function Page({ params }: PageProps) {
  const resolvedParams = await params
  const postId = resolvedParams.id
  
  const user = useUser()
  const userId = user?.model?.id || ''

  const post = (await fetch(
    `${api_Url}collections/posts/records/${postId}?expand=profile`,
  ).then((res) => res.json())) as Post

  return (
    <div className="flex flex-col gap-8 min-h-screen bg-black text-white p-6">
      {/* Header do Post - Design Limpo */}
      <div className="flex gap-4 items-center bg-zinc-900/40 p-4 rounded-2xl backdrop-blur-md border border-zinc-800/50">
        <Avatar user={post.expand.profile} size={50} className="rounded-full border border-zinc-700" />
        <div className="flex flex-col flex-grow">
          <span className="font-semibold text-zinc-100 tracking-tight">
            {post.expand.profile.name}
          </span>
          <span className="text-xs text-zinc-500">
            @{post.expand.profile.username}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Date date={post.created} className="text-xs text-zinc-500" />
          {post.expand.profile.id == userId && <DeleteButton postId={post.id} />}
        </div>
      </div>
      
      {/* Conteúdo do Post */}
      <div className="px-2">
        <p className="text-zinc-200 leading-relaxed text-base">
          {post.caption}
        </p>
      </div>
      
      {/* Divisor Elegante Profissional */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50"></div>
      
      {/* Área de Interação Social */}
      <div className="flex flex-col gap-4">
        <InfiniteComments postId={postId} />
      </div>
    </div>
  )
}

export default Page
