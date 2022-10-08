import { Box } from '@mui/material';
import React from 'react'

function DetailHeader(props) {
    const {movie} = props
    const rootImg = process.env.REACT_APP_PUBLIC_IMG
    const year = new Date(movie.release_date)

  return (
    <Box sx={{display:'flex', flexDirection:'row'}}>
      <img  src={`${rootImg}/w185/${movie.poster_path}`} alt={`poster ${movie.title}`} />
      <div className="section-title">
        <Box sx={{ml: 2}}>
          <h1 >{movie.title}</h1>
          <p >{`${year.getFullYear()} • ${movie.genres.map((genre) => genre.name).splice(0, 2).join(' | ')}`}</p>
          <div >
            <span>
              <i className="fa fa-star" aria-hidden />
            </span>
            <div >
              <span>
                {`${movie.vote_average} (${movie.vote_count.toLocaleString()})`}
              </span>
              
            </div>
          </div>
        </Box>
      </div>
    </Box>
  )
}

export default DetailHeader