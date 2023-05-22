import React from 'react'
import {Stack,CircularProgress, LinearProgress} from "@mui/material";

function CustomSpinner() {
  return (
        <Stack spacing={4}>
            <CircularProgress color='success'/>
            <CircularProgress color="primary"/>
            <CircularProgress variant='determinate' value={25} color='success'/>
        
        <LinearProgress color='secondary'/>
        <LinearProgress color='primary'/>
        <LinearProgress variant='determinate' color='success' value={25}/>
        
        </Stack>
  )
}

export default CustomSpinner