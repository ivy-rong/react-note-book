import NoteListCard from '@/components/NoteListCard'
import { useUserStore } from '@/store'
import { responseUser, notes } from '@/type'

export default function Home(): JSX.Element {
  const [setUser] = useUserStore((state) => [state.setUser])
  useEffect(() => {
    AuthAPI.loginByUsername({
      username: 'Upwards',
      password: '123456'
    })
      .then((res) => {
        const { user, accessToken } = res as responseUser
        setUser(user)
        AuthUtils.setToken(accessToken as string)
      })
      .catch(() => {})
    NotesAPI.getNotes()
      .then((res) => {
        console.log(res as notes)
      })
      .catch(() => {})
  }, [setUser])

  return (
    <>
      <NoteListCard />
    </>
  )
}
