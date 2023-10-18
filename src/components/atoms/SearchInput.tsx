import { Icon } from './Icon'

export function SearchInput() {
  return (
    <div className="flex items-center border border-gray-500 text-gray-100  rounded-sm pr-2 h-12 w-full">
      <input
        type="text"
        placeholder="Buscar livro ou autor"
        className="bg-transparent border-0 outline-0 w-full h-full rounded-full p-2 text-sm placeholder:text-gray-400"
      />
      <Icon icon="MagnifyingGlass" size={20} className="text-gray-500" />
    </div>
  )
}
