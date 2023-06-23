import Image from 'next/image'
import { Avatar } from './atoms/Avatar'
import { Rating } from './Rating'
import { Subtitle } from './atoms/Subtitle'
import { Description } from './atoms/Description'

export function RatingCard() {
  return (
    <div className="bg-gray-700 flex flex-col gap-8 h-max w-max max-w-[608px] text-white rounded-md p-6 ">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Avatar
            alt="Profile pic of Brandon"
            src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            fallback="B"
          />

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
        <figure className="w-full h-[152px] overflow-hidden relative">
          <Image
            src="/images/books/o-hobbit.png"
            alt="book cover"
            className="object-contain"
            fill={true}
            sizes="(max-width: 108px)"
          />
        </figure>
        <div className="flex flex-col gap-5">
          <div>
            <h6 className="text-gray-100 text-md leading-short font-bold">
              O Hobbit
            </h6>
            <Subtitle text="Autor" />
          </div>
          <Description text="O Hobbit conta a história de Bilbo Bolseiro, um Hobbit pacato e satisfeito cuja vida vira de cabeça para baixo quando ele se junta ao mago Gandalf e a treze anões em sua jornada para reaver um tesouro roubado. É uma viagem repleta de perigos – e no fim Bilbo encara sozinho o guardião do tesouro, o mais terrível dragão de toda a Terra-Média. O Hobbit, prelúdio fascinante de J. R. R. Tolkien ao Senhor dos Anéis, é um dos livros mais adorados de todos os tempos. Cuidadosamente condensada e ilustrada, esta versão em quadrinhos tornou-se por si só um best-seller clássico" />
        </div>
      </div>
    </div>
  )
}
