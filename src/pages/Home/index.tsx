import NoteListCard from '@/components/NoteListCard'
import EditListItem from '@/components/EditListItem'
import { useUserStore } from '@/store'
import { Note } from '@/type'
import { Modal } from 'antd'
import { useToggle } from '@/hooks'
export default function Home(): JSX.Element {
  const [setUser] = useUserStore((state) => [state.setUser])
  const [notes, setNotes] = useState<Note[]>([])
  const [editNoteData, setEditNoteData] = useState<Note | null>(null)

  const [showModal, toggleShowModal] = useToggle(false)

  useEffect(() => {
    NotesAPI.getNotes()
      .then((res) => {
        setNotes(res.notes)
      })
      .catch(() => setNotes([]))
  }, [setUser])

  function openModal(data: Note) {
    setEditNoteData(data)
    toggleShowModal()
  }

  function handleSubmit() {
    toggleShowModal()
  }

  function handleCancel() {
    toggleShowModal()
  }

  return (
    <>
      {notes.map((note) => (
        <NoteListCard
          key={note.id}
          data={note}
          openModal={openModal}
        />
      ))}
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
