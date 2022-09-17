import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DiscoverItem from './DiscoverItems'


function DiscoverMovies() {
  return (
    <>
    <Box sx={{ml: 2, mt: 5}}>
      <Typography variant='h3' mb={3}>Discover</Typography>
      <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', overflowX: 'auto'}}>
        <DiscoverItem id={597891} />
        <DiscoverItem id={619297} />
        <DiscoverItem id={508943} />
        <DiscoverItem id={588228} />
        <DiscoverItem id={637534} />
        <DiscoverItem id={525660} />
      </Box>
    </Box>
    </>
  )
}

export default DiscoverMovies