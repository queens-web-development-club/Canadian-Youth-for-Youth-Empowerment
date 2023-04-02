import { Box, Typography } from '@mui/material'
import React from 'react'
import BigCircle from '../images/numCircleLarge.png'
import SmallCircle from '../images/numCircleSmall.png'

const MessageNumberDisplay = () => {
  return (
    <Box position={'relative'}>
        <Box>
             <Box sx={{
                content: {
                    lg:`url(${BigCircle})`, 
                    md:`url(${BigCircle})`, 
                    sm: `url(${SmallCircle})`,
                    xs: `url(${SmallCircle})`
                }         
            }} alt="message count" />
        </Box>
        <Box position={'absolute'} sx={{right:{lg:'32%',md:'32%', sm:'45%', xs:'45%'}, left:{lg:'32%',md:'32%', sm:'42.5%', xs:'42.5%'}, bottom:{lg:'15%',md:'15%', sm:'11.5%', xs:'11.5%'}}} justifyContent={'center'} display='flex' flexDirection={'column'}>
            <Typography sx={{fontSize:{md:'40', sm:'20'}}} justifyContent={'center'} display={'flex'} variant='subtitle' textAlign={'center'}>Messages sent to date:</Typography>
            <Typography sx={{fontSize:{md:'90', sm:'45'}}} justifyContent={'center'} display={'flex'} variant='bigTitle'>1081</Typography>
        </Box>
    </Box>
  )
}

export default MessageNumberDisplay