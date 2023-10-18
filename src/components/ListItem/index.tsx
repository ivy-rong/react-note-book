import { Input } from 'antd'
const { TextArea } = Input

import { Content } from '@/types'
// import IcOutlineInsertLink from '~icons/ic/outline-insert-link'
import LineMdMenuToCloseIcon from '~icons/line-md/menu-to-close-alt-transition'

export default function ListItem(props: Content): JSX.Element {
  return (
    <>
      <div className="p-1">
        <div className="flex justify-start items-center">
          <div className="transition-all rounded-full h-fit w-fit p-1 hover:shadow hover:bg-red-600 hover:border">
            <LineMdMenuToCloseIcon className="text-xs transition-all hover:text-white" />
          </div>
          <div className="flex justify-start items-start w-[90%] ">
            <TextArea
              bordered={false}
              autoSize
              placeholder="Basic usage"
              className="inline-block text-lg"
              value={props.content}
            />
          </div>
        </div>
      </div>
    </>
  )
}
