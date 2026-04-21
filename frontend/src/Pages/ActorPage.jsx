import React from 'react'
import ActorPageComponent from '../Components/ActorPageComponent/ActorPageComponent'
import { useLoaderData } from 'react-router-dom';

const ActorPage = () => {
  const actor = useLoaderData();

  return (
    <>
        <ActorPageComponent actor = {actor}/>
    </>
  )
}

export default ActorPage