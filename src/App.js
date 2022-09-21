import React from 'react'
import { getCategories, getDetailMovie } from './apiData/apiService'
import DiscoverMovies from './components/Discover/DiscoverMovies'

import Header from './components/Header'
import CategoryMovies from './components/MoviesCategories/CategoryMovies'
import TrendingMovies from './components/Trending/TrendingMovies'

function App() {


getDetailMovie()
  return (
    <>
    <Header/>
    <DiscoverMovies/>
    <CategoryMovies/>
    <TrendingMovies/>
    </>
  )
}

export default App