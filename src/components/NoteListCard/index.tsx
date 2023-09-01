import { Card, Input, Checkbox } from 'antd'
const { Meta } = Card
import LineMdMenuToCloseIcon from '~icons/line-md/menu-to-close-alt-transition'
import LineMdEditTwotone from '~icons/line-md/edit-twotone'
import LineMdTextIcon from '~icons/line-md/text-box-multiple-twotone-to-text-box-twotone-transition'
import LineMdBuyMeACoffeeTwotone from '~icons/line-md/buy-me-a-coffee-twotone'

export default function NoteListCard(): JSX.Element {
  return (
    <>
      <div className="flex justify-center">
        <Card
          hoverable
          // loading
          title="欢迎来到 noteBook"
          extra={<LineMdMenuToCloseIcon />}
          className="w-[540px] mt-4"
          actions={[
            <LineMdEditTwotone
              className="text-lg"
              key="setting"
            />,
            <LineMdTextIcon
              className="text-lg"
              key="edit"
            />,
            <LineMdBuyMeACoffeeTwotone
              className="text-lg"
              key="ellipsis"
            />
          ]}
        >
          <Meta
            title="Europe Street beat"
            description="www.instagram.com"
          />
          <Checkbox></Checkbox>
          <Input placeholder="Basic usage" />
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </>
  )
}
