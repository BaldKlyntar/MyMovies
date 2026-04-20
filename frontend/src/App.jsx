import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import { 
  HomeLayout,
  HomePage,
  MoviePage,
 } from './Pages'

 import { loader as movieLoader } from './Components/HomePageComponent/HomePageComponent'
 import { loader as singleMovieLoader } from './Components/MoviePageComponent/MoviePageComponent'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children:[
      {
        index: true,
        element: <HomePage/>,
        loader: movieLoader
        
      },
      {
        path: 'movie/:id',
        element: <MoviePage/>,
        loader: singleMovieLoader

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