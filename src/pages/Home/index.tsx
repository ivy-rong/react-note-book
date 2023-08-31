import { Button } from 'antd'
import { useStore } from '@/store'

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

export default function Home(): JSX.Element {
  const [increasePopulation, removeAllBears] = useStore((state) => [
    state.increasePopulation,
    state.removeAllBears
  ])

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
      <div className="text-3xl font-bold underline bg-red-100">Home</div>
      <BearCounter />
      <Button
        type="primary"
        onClick={increasePopulation}
      >
        one up
      </Button>
      <Button
        type="primary"
        danger
        onClick={removeAllBears}
      >
        归0
      </Button>
      <Outlet />
    </>
  )
}
