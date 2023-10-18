import { BookCard } from '@/components/BookCard'
import { Sidebar } from '@/components/Sidebar'
import { FilterBadge } from '@/components/atoms/FilterBadge'
import { Icon } from '@/components/atoms/Icon'
import { SearchInput } from '@/components/atoms/SearchInput'
import { Title } from '@/components/atoms/Title'

export default function Home() {
  return (
    <div className="flex gap-24 ">
      <Sidebar />
      <main className="flex flex-col gap-10 mt-[72px] w-full pr-20">
        <header className="flex items-center justify-between w-full">
          <div className="flex gap-3">
            <Icon icon="Binoculars" size={32} className="text-green-100" />
            <Title text="Explorar" />
          </div>
          <div className="w-[433px]">
            <SearchInput />
          </div>
        </header>
        <div className="flex gap-3">
          <FilterBadge active={true} />
          <FilterBadge active={false} />
          <FilterBadge active={false} />
          <FilterBadge active={false} />
        </div>
        <div className="flex gap-4 flex-wrap pb-4">
          <BookCard size="md" />
          <BookCard size="md" />
          <BookCard size="md" />
          <BookCard size="md" />
          <BookCard size="md" />
          <BookCard size="md" />
        </div>
      </main>
    </div>
  )
}
