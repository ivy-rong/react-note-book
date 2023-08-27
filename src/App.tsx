
import {lazy,Suspense} from 'react' //路由懒加载
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const Home = lazy(() => import('../src/pages/Home/index'))
const Login = lazy(() => import('../src/pages/Login/index'))
const Signup = lazy(() => import('../src/pages/Signup/index'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider
//     router={router}
//     fallbackElement={<BigSpinner />}
//   />
// );

function App() {
  return (
    <>
    <Suspense>
      <RouterProvider
      router={router}
    />
    
    </Suspense>
    </>
  )
}

export default App
