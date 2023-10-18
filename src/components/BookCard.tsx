import Image from 'next/image'
import { Subtitle } from './atoms/Subtitle'
import { Rating } from './Rating'
import { twMerge } from 'tailwind-merge'

interface Props {
  size?: 'sm' | 'md'
}

export function BookCard({ size = 'sm' }: Props) {
  return (
    <div
      className={twMerge(
        'bg-gray-700 flex flex-col gap-8 h-max w-[324px] text-white rounded-md p-4 relative',
        size === 'md' && 'w-[318px]',
      )}
    >
      <div className="self-end text-xs font-bold  bg-green-300 text-green-100 absolute -top-0 -right-0 w-min rounded-tr-md  rounded-bl-xs px-3 py-1">
        LIDO
      </div>
      <div
        className="gap-5"
        style={{
          display: 'grid',
          gridTemplateColumns: size === 'md' ? '108px 1fr' : '64px 1fr',
        }}
      >
        <figure
          className={twMerge(
            'w-full h-[94px] overflow-hidden relative',
            size === 'md' && 'h-[152px]',
          )}
        >
          <Image
            src="/images/books/o-hobbit.png"
            alt="book cover"
            className="object-contain"
            fill={true}
            sizes="(max-width: 108px)"
          />
        </figure>
        <div className="flex flex-col justify-between">
          <div>
            <h6 className="text-gray-100 text-md leading-short font-bold">
              O Hobbit
            </h6>
            <Subtitle text="Autor" />
          </div>
          <Rating rating={3} />
        </div>
      </div>
    </div>
  )
}
