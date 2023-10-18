import { twMerge } from 'tailwind-merge'

interface Props {
  text: string
  className?: string
}

export function Subtitle({ text, className }: Props) {
  return (
    <h6 className={twMerge('text-gray-400 text-sm leading-base', className)}>
      {text}
    </h6>
  )
}
