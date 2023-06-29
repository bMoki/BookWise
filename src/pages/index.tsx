import { RatingCard } from '@/components/RatingCard'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="flex gap-24 ">
      <Sidebar />
      <main className="flex flex-col">
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </main>
    </div>
  )
}
