import * as PhosphorIcons from '@phosphor-icons/react'
import { createElement } from 'react'

export type IconsFromStyleGuide =
  | 'ChartLineUp'
  | 'Binoculars'
  | 'BookOpen'
  | 'BookmarkSimple'
  | 'Books'
  | 'CaretRight'
  | 'SignIn'
  | 'StarHalf'
  | 'User'
  | 'Star'
  | 'SignOut'
  | 'X'
  | 'Check'
  | 'PencilSimpleLine'
  | 'UserList'
  | 'CaretLeft'
  | 'MagnifyingGlass'

interface Props extends PhosphorIcons.IconProps {
  icon: IconsFromStyleGuide
}
export function Icon({ icon, ...props }: Props) {
  return createElement(PhosphorIcons[icon], { ...props })
}
