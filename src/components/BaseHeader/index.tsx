import { Tooltip } from 'antd'

import LogosGithubIcon from '~icons/logos/github-icon'
import LineMdMoonIcon from '~icons/line-md/moon-alt-to-sunny-outline-loop-transition'
// import LineMdSunnyIcon from '~icons/line-md/sunny-outline-to-moon-alt-loop-transition'
import LanguageIcon from '~icons/ion/language-outline'
import LineMdMenuUnfoldLeft from '~icons/line-md/menu-unfold-left'
import LineMdMenuUnfoldRight from '~icons/line-md/menu-unfold-right'
import LineMdAccount from '~icons/line-md/account'
import { useSiderStore } from '@/store'
export default function Header(): JSX.Element {
  const { hasSider, toggleHasSider } = useSiderStore()
  return (
    <>
      <div className="flex justify-between items-center h-full  px-4">
        <div className="flex justify-start items-center  h-full space-x-2">
          <img
            src="src/assets/logo.png"
            className="h-8 w-8"
          />
          <span className="text-lg font-semibold">NoteBook</span>
          {hasSider ? (
            <LineMdMenuUnfoldRight
              className="text-xl cursor-pointer"
              onClick={toggleHasSider}
            />
          ) : (
            <LineMdMenuUnfoldLeft
              className="text-xl cursor-pointer"
              onClick={toggleHasSider}
            />
          )}
        </div>
        <div className="flex justify-start items-center  h-full space-x-4">
          <LanguageIcon className="text-xl cursor-pointer" />
          <Tooltip
            placement="top"
            title="GitHub"
          >
            <LogosGithubIcon
              onClick={() =>
                BrowserUtils.openNewWindow(
                  'https://github.com/Upwards-rwr/react-study'
                )
              }
              className="text-xl cursor-pointer"
            />
          </Tooltip>

          <Tooltip
            placement="top"
            title="主题切换"
          >
            <LineMdMoonIcon
              onClick={() => {
                ThemeUtils.changeThemeMode(
                  ThemeUtils.getTheme() === 'dark' ? 'light' : 'dark'
                )
              }}
              style={{ fontSize: '1.5em', color: 'orange' }}
              className="cursor-pointer"
            />
          </Tooltip>
          <Tooltip
            placement="top"
            title="{text}"
          >
            <LineMdAccount className="text-xl cursor-pointer" />
          </Tooltip>
        </div>
      </div>
    </>
  )
}
