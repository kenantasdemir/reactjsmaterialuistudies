import { Box ,Paper} from '@mui/material'
import React from 'react'

function CustomPaper() {
  return (
    <Box sx={{display:"flex",gap:"20px"}}>
        <Paper sx={{width:100,height:100}} elevation={0}/>
        <Paper sx={{width:100,height:100}} elevation={1}/>
        <Paper sx={{width:100,height:100}} elevation={2}/>
        <Paper sx={{width:100,height:100}} elevation={3}/>
        <Paper sx={{width:100,height:100}} elevation={4} variant='outlined'/>
    </Box>
  )
}

export default CustomPaper