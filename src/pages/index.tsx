import { BookCard } from '@/components/BookCard'
import { RatingCard } from '@/components/RatingCard'
import { Sidebar } from '@/components/Sidebar'
import { Icon } from '@/components/atoms/Icon'
import { Link } from '@/components/atoms/Link'
import { Subtitle } from '@/components/atoms/Subtitle'
import { Title } from '@/components/atoms/Title'

export default function Home() {
  return (
    <div className="flex gap-24 ">
      <Sidebar />
      <main className="flex flex-col gap-10 mt-[72px]">
        <header className="flex gap-2">
          <Icon icon="ChartLineUp" size={32} className="text-green-100" />
          <Title text="Início" />
        </header>
        <div className="flex gap-16">
          <div className="space-y-3 pb-4">
            <Subtitle
              text="Avaliações mais recentes"
              className="text-gray-100 mb-1"
            />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
            <RatingCard />
          </div>
          <aside className="text-white space-y-3">
            <div className="flex justify-between">
              <Subtitle
                text="Livros populares"
                className="text-gray-100 mb-1"
              />
              <Link href={''} text="Ver todos" />
            </div>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </aside>
        </div>
      </main>
    </div>
  )
}
