import React, { useEffect, useState } from 'react'
import { getCredits, getDetailMovie, getSimilarMovies, getVideoTrailer } from '../apiData/apiService';
import DetailHeader from '../components/DetailMovie/DetailHeader'


function DetailMovie() {
    
  return (
    <>
    <DetailHeader />
    </>
  )
}

export default DetailMovie