import React, { useState } from 'react'
import { Container, Stack, Menu, MenuItem, Button, Box } from '@mui/material'
import { Link, NavLink } from 'react-router-dom';

const Nav = ({headerColor}) => {
    const [open, setOpen] = useState(null)
    
    const openMenu = (event) => {
        setOpen(event.currentTarget)
    } 

    const closeMenu = () => {
        setOpen(null)
    }
    

  return (
    <div style={{backgroundColor:`${headerColor}`, color: 'white'}}>
    <Container maxWidth={'xl'} style={{display:'flex', justifyContent:'space-between' }} >
        <NavLink style={{textDecoration:'none', color: headerColor === '#390099' ? 'white' : 'black'}} to='/'>
            <h4>Plan Gratitiude</h4>
        </NavLink>
        <Stack display={{lg:'flex', md:'flex', sm:'flex', xs:'none'}} direction={'row'} alignItems={'center'} justifyContent={'flex-end'} spacing="2em">
            <NavLink style={{textDecoration:'none', color: headerColor === '#390099' ? 'white' : 'black'}} to='/about'>
                About
            </NavLink>
            <NavLink style={{textDecoration:'none', color: headerColor === '#390099' ? 'white' : 'black'}} to='/thanksomeone'>
                Send a Thank You
            </NavLink>
            <NavLink style={{textDecoration:'none', color: headerColor === '#390099' ? 'white' : 'black'}} to='/forschools'>
                For Schools
            </NavLink>
            <NavLink style={{textDecoration:'none', color: headerColor === '#390099' ? 'white' : 'black'}} to='/feedback'>
                Feedback
            </NavLink>
        </Stack>
        <Box display={{ sm:'none', xs:'flex'}}>
            <Button onClick={openMenu}  >Menu</Button>
            <Menu open={Boolean(open)} anchorEl={open} keepMounted onClose={closeMenu} flexDirection="column">
                <MenuItem><Link to={'/about'}>About</Link></MenuItem>
                <MenuItem><Link to={'/thanksomeone'}>Send a Thank You</Link></MenuItem>
                <MenuItem><Link to={'/forschools'}>For Schools</Link></MenuItem>
                <MenuItem><Link to={'/feedback'}>Feedback</Link></MenuItem>
            </Menu>
        </Box>
    </Container>
</div>
  )
}

export default Nav