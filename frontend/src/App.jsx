import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router-dom'
import { 
  ActorPage,
  HomeLayout,
  HomePage,
  LoginPage,
  MoviePage,
 } from './Pages'

 import { loader as movieLoader } from './Components/HomePageComponent/HomePageComponent'
 import { loader as singleMovieLoader } from './Components/MoviePageComponent/MoviePageComponent'
 import { loader as actorLoader } from './Components/ActorPageComponent/ActorPageComponent'
 import { action as loginAction } from './Components/LoginComponent/LoginComponent'
 import { loader as authLoader } from './Components/Navbar/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    loader: authLoader,
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
      },
      {
        path: 'login',
        element: <LoginPage/>,
        action: loginAction
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