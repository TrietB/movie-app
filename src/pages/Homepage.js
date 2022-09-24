import React from 'react'
import DiscoverMovies from '../components/Discover/DiscoverMovies'
import CategoryMovies from '../components/MoviesCategories/CategoryMovies'
import TrendingMovies from '../components/Trending/TrendingMovies'

function Homepage() {
  return (
    <>
    <DiscoverMovies/>
    <CategoryMovies/>
    <TrendingMovies/>
    </>
  )
}

export default Homepage