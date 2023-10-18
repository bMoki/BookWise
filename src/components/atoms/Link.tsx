import NextLink, { LinkProps } from 'next/link'
import { Icon } from './Icon'

interface Props extends LinkProps {
  text: string
}

export function Link({ text, ...props }: Props) {
  return (
    <NextLink {...props}>
      <div className="flex gap-2 text-purple-100 items-center font-bold text-sm">
        {text}
        <Icon icon="CaretRight" size={16} />
      </div>
    </NextLink>
  )
}
