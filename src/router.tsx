import { lazy } from 'react' //路由懒加载
import { createBrowserRouter } from 'react-router-dom'
const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Auth/Login'))
const Signup = lazy(() => import('@/pages/Auth/Signup'))
const NotFound = lazy(() => import('@/pages/ErrorPages/404'))

export const router = createBrowserRouter([
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
