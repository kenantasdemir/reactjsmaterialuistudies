import React, { useState } from 'react'
import { Snackbar,Button,IconButton } from '@mui/material'
import CloseIcon from "@mui/icons-material/Close"

function CustomSnackbar() {

    let [isOpen,setIsOpen] = useState(false);

    const action =(
            <React.Fragment>
                   <Button size='small' color='primary'>Geri Al</Button>
        <IconButton>
            <CloseIcon sx={{color:"white"}} onClick={()=>setIsOpen(false)}/>
        </IconButton>
            </React.Fragment>
    )


  return (
        <>
            <Button onClick={()=>setIsOpen(true)}>Snackbar Aç</Button>
            <Snackbar open={isOpen} message="uyarı" action={action}
            anchorOrigin={{vertical:"bottom",horizontal:"center"}}
            autoHideDuration={5000} 
            onClose={()=>setIsOpen(false)} 
            />

 
        </>
  )
}

export default CustomSnackbar