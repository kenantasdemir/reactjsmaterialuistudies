import { Box,FormGroup,FormControl,FormLabel,FormControlLabel,Checkbox } from '@mui/material'
import React, { useState } from 'react'

function CustomCheckbox() {

      let [isAccepted,setIsAccepted] = useState(false )

  return (
    <Box>
        <FormControl>
            <FormLabel>Hangi teknolojileri kullanabiliyorsunuz.</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="MongoDB"/>
                <FormControlLabel control={<Checkbox />} label="ExpressJS"/>
                <FormControlLabel control={<Checkbox />} label="NodeJS" />
                <FormControlLabel control={<Checkbox defaultChecked/>} label="React"/>
            </FormGroup>
        </FormControl>

        <FormControl>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={isAccepted} onChange={(e)=>setIsAccepted(e.target.value)}/>} label="Kullanım şartlarını okudum, anladım, kabul ediyorum."/>
            </FormGroup>
        </FormControl>
    </Box>
  )
}

export default CustomCheckbox