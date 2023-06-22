interface Props {
  text: string
}

export function Title({ text }: Props) {
  return <h5 className="text-gray-100 text-md leading-base">{text}</h5>
}
