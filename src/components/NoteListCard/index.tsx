import { Card, Input, Checkbox } from 'antd'
const { TextArea } = Input
import { note } from '@/type'
import LineMdMenuToCloseIcon from '~icons/line-md/menu-to-close-alt-transition'
import LineMdEditTwotone from '~icons/line-md/edit-twotone'
import LineMdTextIcon from '~icons/line-md/text-box-multiple-twotone-to-text-box-twotone-transition'
import LineMdBuyMeACoffeeTwotone from '~icons/line-md/buy-me-a-coffee-twotone'
import IcOutlineInsertLink from '~icons/ic/outline-insert-link'
import IcSharpPlaylistAdd from '~icons/ic/sharp-playlist-add'

import styles from './styles.module.css'
import clsx from 'clsx'

function List(): JSX.Element {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex justify-start items-start w-[90%]">
            <Checkbox className="!mt-1"></Checkbox>
            <TextArea
              bordered={false}
              autoSize
              placeholder="Basic usage"
              className="inline-block"
            />
          </div>
          <div>
            <LineMdMenuToCloseIcon className="text-xs hover:text-red-300" />
          </div>
        </div>
        <div className="flex ml-6 space-x-2">
          <IcOutlineInsertLink className="text-blue-300" />
          <small className="hover:underline text-blue-300">
            IcOutlineInsertLink
          </small>
        </div>
      </div>
    </>
  )
}

export default function NoteListCard(data: note): JSX.Element {
  return (
    <>
      <div className="flex justify-center">
        <Card
          hoverable
          // loading
          title={data.name}
          extra={<LineMdMenuToCloseIcon className="hover:text-red-300" />}
          className={clsx(
            'w-[540px] mt-4',
            styles['ant-card-actions'],
            styles['css-dev-only-do-not-override-17a39f8']
          )}
          actions={[
            <IcSharpPlaylistAdd
              className="text-lg"
              key="setting"
            />,
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
          <p>{data.description}</p>
          <List />
        </Card>
      </div>
    </>
  )
}
