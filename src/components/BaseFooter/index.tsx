export default function Login(): JSX.Element {
  const data = new Date().getFullYear()
  return (
    <footer>
      Powered by
      <a
        href="https://github.com/Upwards-rwr"
        target="_blank"
        title="作者"
        className="mx-1"
      >
        Upwards
      </a>
      | Copyright © 2023 - {data} | MIT License
    </footer>
  )
}
