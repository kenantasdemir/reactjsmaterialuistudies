import React from 'react'
import {Alert,Stack,AlertTitle} from "@mui/material"

function CustomAlert() {
  return (

    <Stack spacing={2}>

            <Alert severity='error'>
                <AlertTitle>Alert Title</AlertTitle>
                        Alert Error
            </Alert>
            <Alert severity='info'>
                <AlertTitle>Alert Info Title</AlertTitle>
                    Alert Info
            </Alert>
            <Alert severity='warning'>
                <AlertTitle>Alert Warning Title</AlertTitle>
                    Alert Warning
            </Alert>
            <Alert severity='success'>
                <AlertTitle>Alert Success Title</AlertTitle>
                    Alert Success
            </Alert>
    </Stack>
            
  )
}

export default CustomAlert