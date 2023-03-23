import React from 'react'
import { Box, Typography} from '@mui/material'
import EmptyImage from '../images/emptyImage.png'

const Photo = ({photoLink = EmptyImage, firstName = 'First Name', lastName = 'Last Name'}) => {
    
  return (
    <Box>
        <Box sx={{backgroundColor:'white', borderRadius: '50px', border:'3px solid black', padding:'1em'}} pb="2em" display={'flex'} flexDirection='column' alignItems={'center'}>
            <img maxHeight={'75%'} maxWidth={'75%'} height={'75%'} width={'75%'} pt={'2em'} src={photoLink} alt="team"/>
            <Typography variant='paragraph' fontWeight={'bold'} pt={'2em'}>{firstName}</Typography>
            <Typography variant='paragraph' fontWeight={'bold'} pb={'1em'}>{lastName}</Typography>
        </Box>
        <Typography variant='paragraph' pt={'2em'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, 
            augue quis sodales commodo, ligula odio lobortis massa,.
        </Typography>
    </Box>
  )
}

export default Photo