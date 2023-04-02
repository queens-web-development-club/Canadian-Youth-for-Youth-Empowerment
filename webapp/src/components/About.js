import { Box, Container, Grid, Typography} from '@mui/material'
import React from 'react'
import Photo from './Photo'

const About = ({headerColor}) => {
    headerColor("#FCE8E1")
  return (
    <Box sx={{backgroundColor:'#FCE8E1'}} minHeight="100vh">
    <Container pt='1em' maxWidth='xl' display='flex' flexDirection='column' >
        <Typography pt='1em' display='flex' variant='title' color={'#390099'}>
            About the Project
        </Typography>
        <Typography  display='flex' variant='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, augue quis sodales commodo, ligula odio lobortis massa, 
            vel ornare lacus erat eu felis. Quisque ac magna eu erat condimentum porta. Nunc eget turpis tincidunt, pretium tortor in, imperdiet 
            lorem. Sed hendrerit eget enim ut ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Integer eu ante eget nulla tempor posuere. Integer maximus erat arcu, et bibendum nunc interdum ac. Proin sed consectetur nisl. Maecenas 
            tincidunt sodales commodo.
        </Typography>
        <Typography display='flex' pt='1em' variant='title' color={'#390099'}>
            Meet the Team
        </Typography>
        <Grid container spacing={2} pb='3em'>
            <Grid item xs={10} md={4}>
                <Photo/>
            </Grid>
            <Grid item xs={10} md={4}>
                <Photo/>
            </Grid>
            <Grid item xs={10} md={4}>
                <Photo/>
            </Grid>
            <Grid item xs={10} md={4}>
                <Photo/>
            </Grid>
            <Grid item xs={10} md={4}>
                <Photo/>
            </Grid>
        </Grid>
    </Container>
    </Box>
  )
}

export default About