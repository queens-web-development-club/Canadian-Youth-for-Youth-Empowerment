import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = ({footerColor}) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{backgroundColor: footerColor}}>
        <Typography color={footerColor === "#390099" ? 'white' : 'black'} style={{fontSize:'12'}}>© Gratitude Map 2021</Typography>
    </Box>
  )
}

export default Footer