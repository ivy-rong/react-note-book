import { lazy, Suspense } from 'react' //路由懒加载
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
// import zhCN from 'antd/locale/zh_CN'
import en_US from 'antd/locale/en_US'
const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Auth/Login'))
const Signup = lazy(() => import('@/pages/Auth/Signup'))
const NotFound = lazy(() => import('@/pages/ErrorPages/404'))
const BaseLayout = lazy(() => import('@/layout/BaseLayout'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/not-found',
        element: <NotFound />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

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
        locale={en_US}
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
