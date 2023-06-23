interface Props {
  text: string
}

export function Subtitle({ text }: Props) {
  return <h6 className="text-gray-400 text-sm leading-base">{text}</h6>
}
