import { Icon, IconsFromStyleGuide } from './Icon'

interface Props {
  icon: IconsFromStyleGuide
  text: string
}

export function Button({ icon, text }: Props) {
  return (
    <button className="flex gap-3 justify-center items-center p-1 rounded-sm">
      Selecionar
      <Icon icon="Check" size={20} className="text-green-100" />
    </button>
  )
}
