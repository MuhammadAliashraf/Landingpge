import React from 'react'
import { Tooltip,Container,AddIcon, Fab, Typography } from '@mui/material'
import { Delete } from '@mui/icons-material'

function Addplus() {
    return (
        <>
            <Tooltip title="add" aria-label="add" className='Tooltip' >
                <Fab color='primary'>
                <Delete/>
                </Fab>
            </Tooltip>
        </>
    )
}

export default Addplus
