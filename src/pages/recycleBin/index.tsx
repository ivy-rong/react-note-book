export default function RecycleBin(): JSX.Element {
  useEffect(() => {
    AuthAPI.loginByUsername({
      username: 'Upwards',
      password: '123456'
    }).then((res) => {
      console.log(res)
    })
  }, [])

  return <>{/* <NoteListCard /> */}</>
}
