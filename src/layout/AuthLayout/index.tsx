// interface Props {}

export default function AuthLayout(): JSX.Element {
  // const { children } = props
  return (
    <>
      <div className="bg-gray-200 flex justify-center items-center">
        <div className="w-16 h-fit">
          <slot />
          {/* {props} */}
          {/* {children} */}
        </div>
      </div>
    </>
  )
}
