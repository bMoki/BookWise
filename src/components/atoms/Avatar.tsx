import * as RAvatar from '@radix-ui/react-avatar'

interface Props {
  src: string
  alt: string
  fallback: string
}

export function Avatar({ alt, fallback, src }: Props) {
  return (
    <RAvatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden w-10 h-10 rounded-full">
      <RAvatar.Image
        className="w-full h-full object-cover rounded-full"
        src={src}
        alt={alt}
      />
      <RAvatar.Fallback className="h-full w-full flex item-center justify-center text-purple-100 text-md">
        {fallback}
      </RAvatar.Fallback>
    </RAvatar.Root>
  )
}
