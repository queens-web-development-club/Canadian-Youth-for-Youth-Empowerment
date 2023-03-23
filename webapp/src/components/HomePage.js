import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import MessageNumberDisplay from './MessageNumberDisplay';
import image from '../images/mainDots.png'
import { Link } from 'react-router-dom';

const HomePage = ({headerColor}) => {
  headerColor('white')
  return (
    <Container maxWidth={'xl'} style={{backgroundImage:`url(${image})`, backgroundSize:"contain"}}>
        <Box 
            pt={{lg:'10em', md:'10em'}} 
            display={'flex'} 
            flexDirection={{lg:'row', md:'row', sm:'column', xs:'column'}} 
            alignItems={{md:'start', sm:'center', xs:'center'}} 
            justifyContent={{sm:'center', xs:'center'}}
            maxheight={'1--vh'}
        >
            <Box 
                flexDirection={'column'} 
                display={'flex'} 
                pb={{sm:'2em', xs:'2em'}} 
                alignItems={{md:'start', sm:'center', xs:'center'}} 
                justifyContent={{sm:'center', xs:'center'}}
            >
                <Typography display={'flex'}  variant='bigTitle'>Gratitiude is Free</Typography>
                <Typography pb={{sm:'1em', xs:'1em'}} display={'flex'} mt={'-.60em'}  variant='subtitle'>Thank someone today... anonmously!</Typography>
                <Box display={'flex'}>
                    <Link to={'/thanksomeone'}>
                        <Button style={{borderRadius:'60px', textTransform:"none"}} sx={{backgroundColor:'#390099', padding:'1.5em', ":hover":{backgroundColor:'#FBC99D', color:'black', padding:'1.5em'}}} display='flex' variant='contained'>
                            <Typography fontSize={'32'} variant="paragraph">
                                Send a Thank You
                            </Typography> 
                        </Button>
                    </Link>
                </Box>
            </Box >
            <Box flexDirection={'column'} display={'flex'}>
                <MessageNumberDisplay/>
            </Box>
        </Box>
    </Container>
  )
}

export default HomePage