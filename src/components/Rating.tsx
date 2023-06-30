import { MouseEvent, useState } from 'react'
import { Icon } from './atoms/Icon'

interface Props {
  rating: number
  readOnly?: boolean
}

export function Rating({ readOnly = true, ...props }: Props) {
  const stars = [false, false, false, false, false]
  const [rating, setRating] = useState(props.rating)
  const [ratingSelected, setRatingSelected] = useState(props.rating)
  stars.fill(true, 0, rating)

  const halfStar = !Number.isInteger(rating) && Math.floor(rating)

  function determineRating(e: MouseEvent<SVGSVGElement>) {
    const width = e.currentTarget.width.baseVal.value
    const key = e.currentTarget.getAttribute('data-key')
    const coord = e.clientX - e.currentTarget.getBoundingClientRect().left
    const isLeft = coord < width / 2
    const value = isLeft ? Number(key!) - 0.5 : Number(key!)

    if (!readOnly) {
      setRating(value)
    }
  }

  function resetRating() {
    setRating(ratingSelected)
  }

  function handleSelectRating() {
    setRatingSelected(rating)
  }

  return (
    <div
      className={`flex h-min gap-1 ${!readOnly && 'hover:cursor-pointer'}`}
      onMouseLeave={resetRating}
      onClick={handleSelectRating}
    >
      {stars.map((fill, i) => {
        const isHalfStar = halfStar === i
        return (
          <Icon
            icon={isHalfStar ? 'StarHalf' : 'Star'}
            onMouseOver={determineRating}
            size={16}
            key={i}
            weight={fill || isHalfStar ? 'fill' : 'regular'}
            className="text-purple-100"
            data-key={i + 1}
          />
        )
      })}
    </div>
  )
}
