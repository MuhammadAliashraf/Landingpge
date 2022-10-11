import React from 'react'
import { Container,Typography } from '@mui/material'
import Homepost from './homepost'
function Home  () {
  return (
    <Container className='feed' >
      <Homepost/>
      <Homepost/>
      <Homepost/>
      <Homepost/>
    </Container>
  )
}

export default Home  
