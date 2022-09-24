import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getCategories, getCredits, getDetailMovie, getSimilarMovies, getVideoTrailer } from './apiData/apiService'
import DiscoverMovies from './components/Discover/DiscoverMovies'

import Header from './components/Header'
import CategoryMovies from './components/MoviesCategories/CategoryMovies'
import TrendingMovies from './components/Trending/TrendingMovies'
import Layout from './layout/Layout'
import DetailMovie from './pages/DetailMovie'
import Homepage from './pages/Homepage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/movie/:id' element={<DetailMovie/>}/>  
      </Route>
    </Routes>
    </>

  )
}

export default App

