import React from 'react'
import { AppBar, InputBase, Toolbar, Typography, Avatar, Link } from '@mui/material'
import { Notifications, Search, } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Home from './home';
import Service from './service';
import { Router, Routes, Route } from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <AppBar className='bar' >
                <Toolbar className='toolsbar' >
                    <Typography variant='h5' >
                        Muhammad Ali
                    </Typography>
                    <div className='Search' >
                        <Search />
                        <InputBase className='input' placeholder='Search....' />
                    </div>
                    <div className='Navitem'>
                        <Link to='/home' className='navitem' >Home</Link>
                        <Link to='/service' className='navitem' >Serivces</Link>
                        <Link to='' className='navitem' >Contact</Link>
                        <Link to='' className='navitem' >About</Link>
                        <Link to='' className='navitem' >Logout</Link>
                    </div>
                    <div className='Icons' >
                        <Badge color="secondary" badgeContent={4} className='badge'>
                            <MailIcon />
                        </Badge>
                        <Badge color="secondary" badgeContent={2} className='badge'>
                            <Notifications />
                        </Badge>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
