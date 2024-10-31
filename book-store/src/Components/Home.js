import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Button LinkComponent={Link} to='/books' variant='contained' sx={{marginTop:15 ,backgroundColor:'orangered'}}>
          <Typography variant='h3'>
                View all Products
          </Typography>
          </Button>
        </Box>
      </h1>
    </div>
  )
}

export default Home
