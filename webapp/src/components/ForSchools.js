import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const ForSchools = ({headerColor}) => {
    headerColor('white')
  return (
    <Box minHeight={'100vh'}>
        <Container maxWidth='xl'>
            <Typography variant='title'>Nothing Here...</Typography>
        </Container>
    </Box>
  )
}

export default ForSchools