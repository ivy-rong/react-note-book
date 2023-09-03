import { Note } from '@/type'
import ListItem from '../ListItem'
import { Input } from 'antd'
import IcSharpPlaylistAdd from '~icons/ic/sharp-playlist-add'
interface Props {
  data: Note
}

export default function EditListList(props: Props): JSX.Element {
  return (
    <>
      <div className="flex justify-center flex-col">
        <Input>{props.data.name}</Input>
        <Input>{props.data.description}</Input>
        {props.data.tasks.map((task) => (
          <ListItem
            key={task.id}
            {...task}
          />
        ))}

        <IcSharpPlaylistAdd
          className="text-lg"
          key="setting"
          onClick={() => {}}
        />
      </div>
    </>
  )
}
