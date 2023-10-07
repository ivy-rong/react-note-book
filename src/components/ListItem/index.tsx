import { Input, Checkbox } from 'antd'
const { TextArea } = Input

import { Task } from '@/types'
import IcOutlineInsertLink from '~icons/ic/outline-insert-link'
import LineMdMenuToCloseIcon from '~icons/line-md/menu-to-close-alt-transition'

export default function ListItem(props: Task): JSX.Element {
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
              value={props.content}
            />
          </div>
          <div>
            <LineMdMenuToCloseIcon className="text-xs hover:text-red-300" />
          </div>
        </div>
        <div className="flex ml-6 space-x-2">
          {props.linkUrl && (
            <>
              <IcOutlineInsertLink className="text-blue-300" />
              <small className="hover:underline text-blue-300">
                {props.linkUrl}
              </small>
            </>
          )}
        </div>
      </div>
    </>
  )
}
