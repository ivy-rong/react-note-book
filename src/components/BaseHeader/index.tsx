import LogosGithubIcon from '~icons/logos/github-icon'
import LineMdMoonIcon from '~icons/line-md/moon-alt-to-sunny-outline-loop-transition'
// import LineMdSunnyIcon from '~icons/line-md/sunny-outline-to-moon-alt-loop-transition'
import LanguageIcon from '~icons/ion/language-outline'
import LineMdMenuUnfoldLeft from '~icons/line-md/menu-unfold-left'
import LineMdMenuUnfoldRight from '~icons/line-md/menu-unfold-right'
import LineMdAccount from '~icons/line-md/account'
import { useSiderStore } from '@/store'
export default function Header(): JSX.Element {
  const [toggleCollapsed, collapsed] = useSiderStore((state) => [
    state.toggleCollapsed,
    state.collapsed
  ])
  return (
    <>
      <div className="flex justify-between items-center h-full  px-4">
        <div className="flex justify-start items-center  h-full space-x-2">
          {collapsed ? (
            <LineMdMenuUnfoldRight
              className="text-xl cursor-pointer"
              onClick={toggleCollapsed}
            />
          ) : (
            <LineMdMenuUnfoldLeft
              className="text-xl cursor-pointer"
              onClick={toggleCollapsed}
            />
          )}

          <span className="text-lg font-semibold">NoteBook</span>
          <img
            src="src/assets/logo.png"
            className="h-8 w-8"
          />
        </div>
        <div className="flex justify-start items-center  h-full space-x-4">
          <LanguageIcon className="text-xl cursor-pointer" />
          <LogosGithubIcon className="text-xl cursor-pointer" />
          <LineMdMoonIcon
            style={{ fontSize: '1.5em', color: 'orange' }}
            className="cursor-pointer"
          />
          <LineMdAccount className="text-xl cursor-pointer" />
        </div>
      </div>
    </>
  )
}
