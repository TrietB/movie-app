import { Box } from '@mui/material';
import React from 'react'

function DetailHeader(props) {
    const {movie} = props
    const rootImg = process.env.REACT_APP_PUBLIC_IMG
    const year = new Date(movie.release_date)

  return (
    <Box sx={{display:'flex', flexDirection:'row'}}>
      <img src={`${rootImg}/w185/${movie.poster_path}`} alt={`poster ${movie.title}`} />
      <div className="section-title">
        <div>
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
              <button
                type="button"
                className="btn-trailer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                </svg>
                <span>Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default DetailHeader