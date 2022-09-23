import React, { useEffect, useState } from 'react'
import { getCategories, getCredits, getDetailMovie, getSimilarMovies, getVideoTrailer } from './apiData/apiService'
import DiscoverMovies from './components/Discover/DiscoverMovies'

import Header from './components/Header'
import CategoryMovies from './components/MoviesCategories/CategoryMovies'
import TrendingMovies from './components/Trending/TrendingMovies'
import DetailMovie from './pages/DetailMovie'

function App() {
  return (
    <>
    <Header/>
    <DiscoverMovies/>
    <CategoryMovies/>
    <TrendingMovies/>
    <DetailMovie/>
    </>
  )
}

export default App

