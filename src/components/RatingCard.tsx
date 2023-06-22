import Image from 'next/image'
import { Avatar } from './atoms/Avatar'
import { Rating } from './Rating'
import { Subtitle } from './atoms/Subtitle'

export function RatingCard() {
  return (
    <div className="bg-gray-700 flex flex-col gap-8 h-max w-max max-w-[608px] text-white rounded-md p-6 ">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex  rounded-full w-11 h-11 bg-gradient-to-b from-green-100 to-purple-100 justify-center items-center">
            <Avatar
              alt="Profile pic of Brandon"
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              fallback="B"
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-gray-100 text-md leading-base">Brandon</span>
            <Subtitle text="Hoje" />
          </div>
        </div>
        <Rating rating={4} />
      </div>

      <div
        className="gap-5"
        style={{ display: 'grid', gridTemplateColumns: '108px 1fr' }}
      >
        <Image
          src="/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png"
          alt="book cover"
          width={108}
          height={152}
        />
        <div className="flex flex-col gap-5">
          <div>
            <span className="text-gray-100 text-md leading-short font-bold">
              O Hobbit
            </span>
            <Subtitle text="Autor" />
          </div>
          <span className="text-gray-300 text-sm leading-base">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh... ver mais
          </span>
        </div>
      </div>
    </div>
  )
}
