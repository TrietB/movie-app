import { Box, Typography } from '@mui/material';
import CurrencyFormat from 'react-currency-format';



export default function DetailInfo(props) {
  const { movie, credits } = props;
  const year = new Date(movie.release_date);
  const rootImg = process.env.REACT_APP_PUBLIC_IMG;

  const crew = credits.crew.filter((person) => person.job === 'Director' || person.job === 'Story' || person.job === 'Creator' || person.job === 'Writer');
  const cast = credits.cast.sort();

  return (
    <div className="section-info">
        <div className='column'>

            <div className="info-crew">
            {crew.forEach((person) => (
                <Box key={person.credit_id} className="crew">
                    <Typography variant='h5' sx={{mt: 5}}>{person.job}</Typography>
                    <Typography sx={{mt: 2}}>{person.name}</Typography>
                </Box>
            ))}
            <div />
        </div>
        <div className="info-overview">
            <Box sx={{mt:3}}>
                <Typography variant='h5'>Overview</Typography>
                <Typography paragraph={true} sx={{mt: 3}}>{movie.overview}</Typography>
            </Box>
            <Box sx={{mt:3, width:'1000px'}}>
                <Typography variant='h5'>Cast</Typography>
            <div className="cast-wrapper">
            {cast.forEach((person) => {
                if (person.profile_path !== null) {
                    return (
                        <div key={person.credit_id} className="cast-box">
                        <img src={`${rootImg}/w92${person.profile_path}`} alt={person.name} className="img-cast" />
                        <p>{person.original_name}</p>
                    </div>
                    );
                }
            })}
            </div>
            </Box>
        </div>
        </div>
        <div className="info-movie">
        <div>
            <Typography variant='h6'>Status</Typography>
            <p>{movie.status}</p>
        </div>
        <div>
            <Typography variant='h6'>Released date</Typography>
            <p>{year.toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
        <div>
            <Typography variant='h6'>Duration</Typography>
            <p>{`${movie.runtime} Min`}</p>
        </div>
        <div>
            <Typography variant='h6'>Language</Typography>
            <p>{movie.original_language}</p>
        </div>
        <div>
            <Typography variant='h6'>Popularity</Typography>
            <p>{movie.popularity}</p>
        </div>
        <div>
            <Typography variant='h6'>Budget</Typography>
            <p><CurrencyFormat value={movie.budget} displayType="text" prefix="$" thousandSeparator /></p>
        </div>
        <div>
            <Typography variant='h6'>Revenue</Typography>
            <p><CurrencyFormat value={movie.revenue} displayType="text" prefix="$" thousandSeparator /></p>
        </div>
      </div>
    </div>
  );
}
