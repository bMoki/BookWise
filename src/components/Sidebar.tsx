import { Logo } from './atoms/Logo'
import { MenuItem } from './atoms/MenuItem'
import { Icon } from './atoms/Icon'

function SidebarEffects() {
  return (
    <div className="bg-gray-800 w-[232px] absolute left-[calc(50%_-_116px)] bottom-0 top-0 overflow-hidden -z-50">
      <div
        className="bg-green-200 rounded-[50%] w-[294px] h-[292px] absolute left-[calc(50%_-_223px)] top-[1037px]"
        style={{
          opacity: '0.800000011920929',
          transformOrigin: '0 0',
          transform: 'rotate(-90deg) scale(1, 1)',
          filter: 'blur(262.4px)',
        }}
      ></div>

      <div
        className="bg-green-200 rounded-[50%] w-[221px] h-[221px] absolute left-[calc(50%_-_206px)] top-[140px]"
        style={{
          opacity: '0.5',
          transformOrigin: '0 0',
          transform: 'rotate(-90deg) scale(1, 1)',
          filter: 'blur(94.65px)',
        }}
      ></div>

      <div
        className="bg-purple-200 rounded-[50%] w-[221px] h-[221px] absolute left-[calc(50%_-_10px)] top-[140px]"
        style={{
          opacity: '0.800000011920929',
          transformOrigin: '0 0',
          transform: 'rotate(-90deg) scale(1, 1)',
          filter: 'blur(94.65px)',
        }}
      ></div>

      <div
        className="bg-purple-200 rounded-[50%] w-[295px] h-[295px] absolute left-[calc(50%_-_51px)] top-[560px]"
        style={{
          opacity: '0.800000011920929',
          transformOrigin: '0 0',
          transform: 'rotate(-90deg) scale(1, 1)',
          filter: 'blur(226.65px)',
        }}
      ></div>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="sticky top-4 overflow-hidden m-4 bg-gray-700 w-[232px] min-w-[232px] rounded-md h-[calc(100vh_-_32px)]">
      <SidebarEffects />
      <div className="flex flex-col gap-16 justify-center pt-10 pb-6 h-full">
        <Logo />
        <div className="flex flex-col gap-4 h-full">
          <MenuItem href="/" label="Inicio" icon="ChartLineUp" />
          <MenuItem href="/explore" label="Explorar" icon="Binoculars" />
          <div className="mt-auto flex justify-center items-center text-gray-200 leading-base font-bold text-md  ">
            <button className="flex gap-3 justify-center items-center hover:bg-gray-200 hover:bg-opacity-5 p-1 rounded-sm">
              Fazer login
              <Icon icon="SignIn" size={20} className="text-green-100" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
