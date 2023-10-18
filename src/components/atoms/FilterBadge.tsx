import { twMerge } from 'tailwind-merge'

interface Props {
  active: boolean
}

export function FilterBadge({ active }: Props) {
  return (
    <button
      type="button"
      className={twMerge(
        'rounded-full bg-transparent px-4 py-1 border border-purple-100 text-purple-100',
        active && 'bg-purple-200 text-gray-100 border-purple-200',
      )}
    >
      Categoria
    </button>
  )
}
