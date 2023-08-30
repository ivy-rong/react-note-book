import { Outlet } from 'react-router'
import { useStore } from '../../store'
import { Button } from 'antd'
import { useEffect, useState } from 'react'

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} around here...</h1>
}

export default function Home(): JSX.Element {
  useEffect(() => {
    fetch('http://localhost:3000/5?name=rwr', {
      headers: {}
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
      })
  }, [])

  const [increasePopulation, removeAllBears] = useStore((state) => [
    state.increasePopulation,
    state.removeAllBears
  ])
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
