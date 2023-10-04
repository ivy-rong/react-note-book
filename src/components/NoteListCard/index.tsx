import { Card } from 'antd'
import { Note } from '@/type'
import ListItem from '../ListItem'
import LineMdMenuToCloseIcon from '~icons/line-md/menu-to-close-alt-transition'
import LineMdEditTwotone from '~icons/line-md/edit-twotone'
import LineMdTextIcon from '~icons/line-md/text-box-multiple-twotone-to-text-box-twotone-transition'
import LineMdBuyMeACoffeeTwotone from '~icons/line-md/buy-me-a-coffee-twotone'
import IcSharpPlaylistAdd from '~icons/ic/sharp-playlist-add'

import styles from './styles.module.css'
import clsx from 'clsx'

interface Props {
  data: Note
  openModal?: (data: Note) => void
}

export default function NoteListCard(props: Props): JSX.Element {
  const [isEdit, setIsEdit] = useState(false)
  const handleEdit = (data: Note) => {
    setIsEdit(!isEdit)
    props.openModal && props.openModal(data)
    //
  }

  return (
    <>
      <div className="flex justify-center">
        <Card
          hoverable
          // loading
          title={props.data.title}
          extra={
            !isEdit && <LineMdMenuToCloseIcon className="hover:text-red-300" />
          }
          className={clsx(
            'w-[540px] !mt-4',
            styles['ant-card-actions'],
            styles['css-dev-only-do-not-override-17a39f8']
          )}
          actions={[
            <IcSharpPlaylistAdd
              className="text-lg"
              key="setting"
              onClick={() => {}}
            />,
            <LineMdEditTwotone
              className="text-lg"
              key="setting"
              onClick={() => handleEdit(props.data)}
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
          <p>{props.data.description}</p>
          {props.data.tasks.map((task) => (
            <ListItem
              key={task.id}
              {...task}
            />
          ))}
        </Card>
      </div>
    </>
  )
}
