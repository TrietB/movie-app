import React from 'react'
import { getCategories, getDetailMovie } from './apiData/apiService'
import DiscoverMovies from './components/Discover/DiscoverMovies'

import Header from './components/Header'
import CategoryMovies from './components/MoviesCategories/CategoryMovies'

function App() {


getDetailMovie()
  return (
    <>
    <Header/>
    <DiscoverMovies/>
    <CategoryMovies/>
    </>
  )
}

export default App