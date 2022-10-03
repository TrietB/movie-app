import React, {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getCredits, getDetailMovie, getSimilarMovies } from '../apiData/apiService';
import DetailHeader from '../components/DetailMovie/DetailHeader'
import DetailInfo from '../components/DetailMovie/DetailInfo';
import DetailSimilar from '../components/DetailMovie/DetailSimilar'
import '../styles/detailMovie.css'


function DetailMovie() {
  const [movie, setMovie] = useState(null)  
  const [credits, setCredits] = useState(null)
  const [similars, setSimilars] = useState(null)
  const param = useParams()
  const {id} = param
  
  console.log(movie, credits, similars)
  const rootImg = process.env.REACT_APP_PUBLIC_IMG

  const getDetailMovieAPI =  async (id) => {
    const response = await getDetailMovie(id)
    setMovie(response)
  }

  const getCreditsAPI =  async (id) => {
    const response = await getCredits(id)
    setCredits(response)
  }

  const getSimilarMoviesAPI = async (id) => {
    const response = await getSimilarMovies(id)
    setSimilars(response.results)
  }
  

  useEffect(()=>{
    getDetailMovieAPI(id)
    getCreditsAPI(id)
    getSimilarMoviesAPI(id)
    // eslint-disable-next-line
},[])

  
  return movie && credits&& similars && (
    <>
    <div className='detail-movie'>

      <div className="section-backdrop">
          <img src={`${rootImg}/w1280/${movie?.backdrop_path}`} alt={`backdrop ${movie?.title}`} />
      </div>
      <div className="section-content">
      <DetailHeader movie={movie} />
      <DetailInfo movie={movie} credits={credits} />
      <DetailSimilar similarMovies={similars} type='backdrop'/>
      </div>
    </div>
    </>
  )

}

export default DetailMovie