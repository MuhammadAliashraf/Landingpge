import { Camera, Home, LocationCity, Person, Phone, Settings, Storefront, TabletMac } from '@mui/icons-material'
import { Container,List,Typography } from '@mui/material'
import React from 'react'

function Leftbar() {
  return (
    <Container className='left' >
      <div className='sideitem'>
        <Home className='homeicon' />
        <Typography to='' className='homeicontext' >Home</Typography>
      </div>
      <div className='sideitem'>
        <Camera className='Cameraicon' />
        <Typography to='' className='Cameraicontext' >Camera </Typography>
      </div>
      <div className='sideitem'>
        <Phone className='Phoneicon' />
        <Typography to='' className='Phoneicontext' >Phone </Typography>
      </div>
      <div className='sideitem'>
        <Person className='Personicon' />
        <Typography to='' className='Personicontext' >Person </Typography>
      </div>
      <div className='sideitem'>
        <TabletMac className='TabletMacicon' />
        <Typography to='' className='TabletMacicontext' >Serivces</Typography>
      </div>
      <div className='sideitem'>
        <Storefront className='Storefronticon' />
        <Typography to='' className='Storefronticontext' >Store front </Typography>
      </div>
      <div className='sideitem'>
        <Settings className='Listicon' />
        <Typography to='' className='Listicontext' >Settings</Typography>
      </div>
    </Container>
  )
}

export default Leftbar
