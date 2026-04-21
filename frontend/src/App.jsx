import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import { 
  ActorPage,
  HomeLayout,
  HomePage,
  MoviePage,
 } from './Pages'

 import { loader as movieLoader } from './Components/HomePageComponent/HomePageComponent'
 import { loader as singleMovieLoader } from './Components/MoviePageComponent/MoviePageComponent'
 import { loader as actorLoader } from './Components/ActorPageComponent/ActorPageComponent'

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

      },
      {
        path: 'actor/:tmdb_id',
        element: <ActorPage/>,
        loader: actorLoader
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