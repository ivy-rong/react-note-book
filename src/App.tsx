import { Suspense } from 'react' //路由懒加载
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
// import en_US from 'antd/locale/en_US'

import { router } from './router'

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider
//     router={router}
//     fallbackElement={<BigSpinner />}
//   />
// );

function App() {
  return (
    <>
      <ConfigProvider
        locale={zhCN}
        theme={{
          algorithm: theme.defaultAlgorithm
        }}
      >
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </>
  )
}

export default App
