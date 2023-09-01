import NoteListCard from '@/components/NoteListCard'

export default function Home(): JSX.Element {
  useEffect(() => {
    AuthAPI.loginByUsername({
      username: 'Upwards',
      password: '123456'
    }).then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <>
      <NoteListCard />
    </>
  )
}
