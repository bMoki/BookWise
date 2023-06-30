import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon, IconsFromStyleGuide } from './Icon'

interface Props {
  href: string
  icon: IconsFromStyleGuide
  label: string
}

export function MenuItem({ label, href, icon }: Props) {
  const link = usePathname()
  const isAtPath = link === href

  return (
    <Link
      className={clsx('group flex ml-14 items-center gap-4', {
        'text-gray-100': isAtPath,
        'text-gray-400 hover:text-gray-100': !isAtPath,
      })}
      href={href}
    >
      <div
        className={clsx('h-6 w-1 rounded-full', {
          'bg-gradient-to-b from-green-50 to-purple-50': isAtPath,
          'bg-transparent': !isAtPath,
        })}
      />
      <Icon icon={icon} size={24} />
      <h6
        className={clsx('leading-base text-md', {
          'text-gray-100 font-bold': isAtPath,
          'text-gray-400 group-hover:text-gray-100': !isAtPath,
        })}
      >
        {label}
      </h6>
    </Link>
  )
}
