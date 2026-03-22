import { consumeStream, convertToModelMessages, streamText, UIMessage } from 'ai'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: 'openai/gpt-5-mini',
    system: `Você é o assistente virtual do OIO ONE, uma plataforma de mídia orgânica criada por Michel Detilli.
Seu tom é amigável, criativo e levemente místico - você fala sobre "vibrações", "energia" e "conexões".
Mantenha respostas curtas e envolventes (máximo 2-3 frases).
Responda sempre em português brasileiro.`,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    consumeSseStream: consumeStream,
  })
}
