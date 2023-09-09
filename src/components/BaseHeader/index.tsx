import { Tooltip, Popover } from 'antd'

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
  const [showArrow, setShowArrow] = useState(true)
  const [arrowAtCenter, setArrowAtCenter] = useState(false)

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true }
    return showArrow
  }, [showArrow, arrowAtCenter])
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
          <Popover
            placement="bottom"
            content={
              <>
                <div className="cursor-pointer px-2 rounded hover:bg-blue-100">
                  English
                </div>
                <div className="cursor-pointer px-2 rounded hover:bg-blue-100">
                  中文
                </div>
              </>
            }
          >
            <div>
              <LanguageIcon className="text-xl cursor-pointer" />
            </div>
          </Popover>

          <Tooltip
            placement="bottom"
            title="Github"
          >
            <div>
              <LogosGithubIcon
                onClick={() =>
                  BrowserUtils.openNewWindow(
                    'https://github.com/Upwards-rwr/react-study'
                  )
                }
                className="text-xl cursor-pointer"
              />
            </div>
          </Tooltip>

          <Tooltip
            placement="top"
            title="主题切换"
          >
            <div>
              <LineMdMoonIcon
                onClick={() => {
                  ThemeUtils.changeThemeMode(
                    ThemeUtils.getTheme() === 'dark' ? 'light' : 'dark'
                  )
                }}
                style={{ fontSize: '1.5em', color: 'orange' }}
                className="cursor-pointer"
              />
            </div>
          </Tooltip>
          <Popover
            placement="bottom"
            content={
              <>
                <div className="cursor-pointer px-2 rounded hover:bg-blue-100">
                  个人中心
                </div>
                <div className="cursor-pointer px-2 rounded hover:bg-blue-100">
                  退出登录
                </div>
              </>
            }
          >
            <div>
              <LineMdAccount className="text-xl cursor-pointer" />
            </div>
          </Popover>
        </div>
      </div>
    </>
  )
}
