import Image from 'next/image'

interface Props {
  src: string
  alt: string
  fallback: string
}

export function Avatar({ alt, fallback, src }: Props) {
  return (
    <div className="flex  rounded-full w-11 h-11 bg-gradient-to-b from-green-100 to-purple-100 justify-center items-center">
      <div className="inline-flex items-center justify-center align-middle overflow-hidden w-10 h-10 rounded-full relative">
        <figure className="w-full h-full rounded-full overflow-hidden absolute">
          <Image
            src={src}
            alt={alt}
            fill={true}
            className="object-cover"
            sizes="(max-width: 40px)"
          />
        </figure>
      </div>
    </div>
  )
}
