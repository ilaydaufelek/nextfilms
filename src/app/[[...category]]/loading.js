import React from 'react'
import CategoriesLoading from '@/components/categories/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'
import FeatureMovieLoading from '@/components/featured-movie/loading'
function Loading() {
  return (
  <> 
  <FeatureMovieLoading/>
   <CategoriesLoading/>
  
    <MoviesSectionLoading/>
  </>
  )
}

export default Loading
