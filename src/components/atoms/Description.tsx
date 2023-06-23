import { useState } from 'react'

interface Props {
  text: string
}

export function Description({ text }: Props) {
  const truncateLength = 242
  const isTruncate = text.length > truncateLength

  function truncateString(
    text: string,
    truncateLength: number,
    isShowingMore: boolean,
  ) {
    if (isTruncate && !isShowingMore) {
      return text.slice(0, truncateLength) + '...'
    }
    return text
  }

  const [isShowingMore, setIsShowingMore] = useState(false)

  return (
    <div>
      <p className="text-gray-300 text-sm leading-base ">
        {truncateString(text, truncateLength, isShowingMore)}{' '}
        {isTruncate && (
          <button
            onClick={() => setIsShowingMore((state) => !state)}
            className="text-purple-100 font-bold hover:cursor-pointer text-sm hover:opacity-80"
          >
            {isShowingMore ? 'ver menos' : 'ver mais'}
          </button>
        )}
      </p>
    </div>
  )
}
