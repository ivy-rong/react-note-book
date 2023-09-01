import type { MenuProps } from 'antd'
import LineMdPencilTwotone from '~icons/line-md/pencil-twotone'
import LineMdTextIcon from '~icons/line-md/text-box-multiple-twotone-to-text-box-twotone-transition'
import LineMdBuyMeACoffeeTwotone from '~icons/line-md/buy-me-a-coffee-twotone'
import { Menu } from 'antd'
import { useSiderStore } from '@/store'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('记事', 'note', <LineMdPencilTwotone />),
  getItem('归档', 'archive', <LineMdTextIcon />),
  getItem('回收站', 'recycleBin', <LineMdBuyMeACoffeeTwotone />)
]
export default function Sider(): JSX.Element {
  const collapsed = useSiderStore((state) => state.collapsed)
  return (
    <>
      <div className="h-full">
        <Menu
          defaultSelectedKeys={['note']}
          mode="inline"
          theme="light"
          items={items}
          inlineIndent={collapsed ? 24 : 6}
        />
      </div>
    </>
  )
}
