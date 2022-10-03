import { Box, Typography } from '@mui/material';
import MovieItem from '../MoviesCategories/MovieItem'


export default function DetailSimilar(props) {
  const { similarMovies ,type } = props;


  return (
    <div className="section-recom ">
      <Typography variant='h5' sx={{mb: 5, mt:3}}>Recommendation Movies</Typography>
      <Box sx={{display:'flex', flexDirection:'row', overflow: 'auto'}} className="scroll-wrapper">
        {similarMovies.forEach((similar) => {
          if (similar.backdrop_path !== null) {
            return (
              <MovieItem
                key={similar.id}
                id={similar.id}
                title={similar.title}
                release_date={similar.release_date}
                poster={similar.poster_path}
                rate={similar.vote_average}
                count={similar.vote_count}
                genres={similar.genres}
                backdrop={similar.backdrop_path}
                type={type}
              />
            );
          }
        })}
      </Box>
    </div>
  );
}
