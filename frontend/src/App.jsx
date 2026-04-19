import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import { 
  HomeLayout,
  HomePage,
  MoviePage,
 } from './Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children:[
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: 'movie/:id',
        element: <MoviePage/>

      }
    ]
  }
])


const App = () => {
  return(
    <RouterProvider router={router}/>
  )
}

export default App