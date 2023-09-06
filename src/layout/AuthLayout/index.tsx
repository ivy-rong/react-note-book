interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function AuthLayout(props: Props): JSX.Element {
  const { children } = props
  return (
    <>
      <div className="bg-blue-50 h-full w-full flex justify-center items-center">
        <div className="w-[340px] px-6 space-y-2 rounded-lg shadow hover:shadow-sm bg-white flex items-center flex-col py-6">
          {children}
        </div>
      </div>
    </>
  )
}
