import { NoteListCard, EditListItem } from '@/components'
import { useUserStore } from '@/store'
import { Note, BaseResponse, NotesResponse } from '@/type'
import { Modal } from 'antd'
import { useToggle } from '@/hooks'

// import { useReducer, createContext, useContext } from 'react'

// interface State {
//   count: number
// }

// type CounterAction =
//   | { type: 'reset' }
//   | { type: 'setCount'; value: State['count'] }

// const initialState: State = { count: 0 }

// function stateReducer(state: State, action: CounterAction): State {
//   switch (action.type) {
//     case 'reset':
//       return initialState
//     case 'setCount':
//       return { ...state, count: action.value }
//     default:
//       throw new Error('Unknown action')
//   }
// }

export default function Home(): JSX.Element {
  const [setUser] = useUserStore((state) => [state.setUser])
  const [notes, setNotes] = useState<Note[]>([])
  const [editNoteData, setEditNoteData] = useState<Note | null>(null)

  const [showModal, toggleShowModal] = useToggle(false)

  const [messageApi, contextHolder] = message.useMessage()

  useEffect(() => {
    NotesAPI.getNotes()
      .then((res: BaseResponse) => {
        const { data, message } = res
        const { notes, pageCount, pageSize, total } = data as NotesResponse
        messageApi.success(message)
        setNotes(notes)
        console.log(pageCount, pageSize, total)
      })

      .catch(() => setNotes([]))
  }, [messageApi, setUser])

  // function openModal(data: Note) {
  //   setEditNoteData(data)
  //   toggleShowModal()
  // }

  function handleSubmit() {
    toggleShowModal()
  }

  function handleCancel() {
    toggleShowModal()
  }

  // const [state1, dispatch] = useReducer(stateReducer, initialState)
  // const addFive = () => dispatch({ type: 'setCount', value: state1.count + 5 })
  // const reset = () => dispatch({ type: 'reset' })

  // type Theme = 'light' | 'dark' | 'system'

  // const ThemeContext = createContext<Theme>('system')

  // const useGetTheme = () => useContext(ThemeContext)

  return (
    <>
      {contextHolder}
      {/* {notes.map((note) => (
        <NoteListCard
          key={note.id}
          data={note}
          openModal={openModal}
        />
      ))} */}
      <Modal
        title="编辑"
        open={showModal}
        onOk={handleSubmit}
        onCancel={handleCancel}
      >
        {editNoteData && <EditListItem data={editNoteData} />}
      </Modal>
    </>
  )
}
