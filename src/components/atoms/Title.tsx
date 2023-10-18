interface Props {
  text: string
}

export function Title({ text }: Props) {
  return (
    <h5 className="text-gray-100 text-2xl leading-short font-bold">{text}</h5>
  )
}
