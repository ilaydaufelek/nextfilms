import React from 'react'
import  FeaturedMovie  from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

function HomeContainers({
  topRatedMovies=[],
  populerMovies=[],
categories=[],
  selectedCategory
}) {
 
  
  return (
    <div>
     <FeaturedMovie movie={topRatedMovies?.[0]} />
     <Categories categories={categories.slice(0,5)} />
     { 
     selectedCategory.movies.length > 0 && (
       <MoviesSection movies={selectedCategory.movies} title={categories.find(genre=>`${genre.id}`=== selectedCategory.id)?.name}/>
        
       
     ) }
      
    
      
     <MoviesSection movies={populerMovies.slice(1,7)} title='Populer Films'/>
      <MoviesSection movies={topRatedMovies.slice(7,13)}
       title='Your Favorites'/>
    </div>
  )
}

export default HomeContainers
