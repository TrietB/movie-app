import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useRouteMatch } from 'react-router-dom'
import Layout from './layout/Layout'
import DetailMovie from './pages/DetailMovie'
import Homepage from './pages/Homepage'
import CategoryViewAll from './pages/movie/CategoryViewAll'
import MovieResult from './pages/movie/MovieResult'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/movie/:id' element={<DetailMovie/>}/>
        <Route path='/movies/category' element={<CategoryViewAll/>}/>
        <Route path='/search/:keyword' element={<MovieResult/>}/>
      </Route>
    </Routes>
    </>

  )
}

export default App

