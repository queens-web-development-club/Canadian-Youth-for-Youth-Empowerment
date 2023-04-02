import React from 'react'
import { Box, Typography, ListItem, List } from '@mui/material'
import image from '../images/mainDots.png'
import EmailForm from './EmailForm'


const ThankSomeone = ({headerColor}) => {
  headerColor('#390099')
  return (
    <div style={{backgroundColor:'#390099',backgroundImage:`url(${image})`, backgroundRepeat:'true'}}>
    <Box sx={{position:'relative', paddingBottom:{xl: '7em', md:'7em', sm:'3em', xs:'3em'}, borderBottomLeftRadius:'50px',borderBottomRightRadius:'50px', zIndex:'10', backgroundColor:'#390099'}} >
      <Box pl={{xl: '10em', md:'10em', sm:'3em', xs:'3em'}} pr={{xl: '10em', md:'10em', sm:'3em', xs:'3em'}} pt={{lg:'5em', md:'5em'}} display='flex' flexDirection={'column'}>
        <Typography color='#DEAAFF' variant='title'>Thank someone in 3 easy steps!</Typography>
        <Typography color='white' pt={{lg:'2em', md:'2em'}} variant="subtitle">
            1. Choose who to thank
        </Typography> 
        <Box display={'flex'} flexDirection='row'>
        <List sx = {{color:'white', listStyleType: 'disc', pl: '3em', '& .MuiListItem-root': {display: 'list-item',},}}>
          <ListItem p={0}>Friend</ListItem>
          <ListItem>Teacher</ListItem>
          <ListItem>Teacher's Assistant</ListItem>
          <ListItem>Conceirge</ListItem>
        </List>
        <List sx = {{color:'white', listStyleType: 'disc', pl: '2em', '& .MuiListItem-root': {display: 'list-item',},}}>
          <ListItem >Culteral/Pastoral Animator</ListItem>
          <ListItem >Member of Management</ListItem>
          <ListItem color='white' >Secretary</ListItem> 
        </List>
        </Box>
      </Box>
    </Box>
    <Box sx={{top:'-3em',position:'relative', paddingBottom:{xl: '7em', md:'7em', sm:'3em', xs:'3em'}, borderBottomLeftRadius:'50px',borderBottomRightRadius:'50px', zIndex:'9', backgroundColor:'#FBC99D'}} >
      <Box pl={{xl: '10em', md:'10em', sm:'3em', xs:'3em'}} pr={{xl: '10em', md:'10em', sm:'3em', xs:'3em'}} pt={{lg:'5em', md:'5em', sm:'4em', xs:'4em'}} display='flex' flexDirection={'column'}>
        <Typography pt={{lg:'2em', md:'2em'}} variant="subtitle">
            2. Write your message
        </Typography> 
        <Typography pl='1em' variant='paragraph'>
          You can choose between writing your own message, writing a message based on a pre-written phrase, or a completely pre-written message
        </Typography>
      </Box>
    </Box>
    <Box sx={{top:'-6em',position:'relative', paddingBottom:{xl: '7em', md:'7em', sm:'3em', xs:'3em'}, borderBottomLeftRadius:'50px',borderBottomRightRadius:'50px', zIndex:'8', backgroundColor:'white'}} >
      <Box pl={{xl: '10em', md:'10em', sm:'3em', xs:'3em'}} pr={{xl: '10em', md:'10em', sm:'3em', xs:'3em'}} pt={{lg:'5em', md:'5em', sm:'4em', xs:'4em'}} display='flex' flexDirection={'column'}>
        <Typography pt={{lg:'2em', md:'2em'}} variant="subtitle">
            2. Send your message
        </Typography> 
        <Typography pl='1em' variant='paragraph'>
          You can choose whether your message is anonymous or not! Your message will be emailed to the chosen person.
        </Typography>
      </Box>
    </Box>
    <Box sx={{top:'-9em',position:'relative',alignItems:'center',display:'flex',flexDirection:'column', paddingBottom:{xl: '7em', md:'7em', sm:'3em', xs:'3em'},height:'100%', zIndex:'7', backgroundColor:'transparent'}} >
      <Box display='flex' flexDirection={'column'} alignItems={'center'} pt={{lg:'5em', md:'5em', sm:'4em', xs:'4em'}}>
        <Typography color='white' pt={{lg:'2em', md:'2em'}} variant="title">
           Thank Someone 
        </Typography> 
        <Typography color='#DEAAFF' pl='1em' variant='paragraph'>
         Compose your Thank Your message here! 
        </Typography>
      </Box>
        <EmailForm/>
    </Box>
</div>
  )
}

export default ThankSomeone