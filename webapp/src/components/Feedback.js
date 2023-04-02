import { Box, Container, Link, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import React from 'react'

const Feedback = ({headerColor}) => {
  headerColor('white')
  return (
    <Box minHeight="100vh">
        <Container maxWidth='xl' display='flex' flexDirection='column' height='100vh'>
            <Typography color={'#FBC99D'} display='flex' variant='title' pt='1em'>
                Feedback Form
            </Typography>
            <Typography variant='paragraph' display='flex' pt={'3em'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, augue quis sodales commodo, 
                ligula odio lobortis massa, vel ornare lacus erat eu felis. Quisque ac magna eu erat condimentum porta. 
                Nunc eget turpis tincidunt, pretium tortor in, imperdiet lorem. Sed hendrerit eget enim ut ullamcorper. 
            </Typography>
            <Link href="#" underline='none' display='flex' pt={'3em'}>
                <OpenInNewIcon/>
                <Typography fontWeight={'bold'} variant='paragraph'>Complete Feedback Form</Typography>
            </Link>
        </Container>
    </Box>
  )
}

export default Feedback