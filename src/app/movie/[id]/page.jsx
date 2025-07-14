import React from 'react'
import Movies from '@/mocks/movies.json'
import MovieContainer from '@/containers/movie'
import { notFound } from 'next/navigation'
const MoviePage = ({params,searchParams}) => {
    
  const movieDetail=Movies.results.find(movie=>movie.id.toString() === params.id)

  if(!movieDetail){
    notFound()
  }

  if(searchParams.eror==='true'){
    throw new Error('error happened')

  }

  return (
   <MovieContainer movie={movieDetail} />
  )
}

export default MoviePage
