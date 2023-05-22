import React,{useState} from 'react'
import {
    IconButton,
    Drawer,
    Box,
    Typography,
} from "@mui/material";
   
import MenuIcon from "@mui/icons-material/Menu"

function CustomDrawer() {

    let [isOpen,setIsOpen] = useState(false)



  return (
   <>
        <IconButton size="large" onClick={()=>setIsOpen(true)}>
            <MenuIcon />
        </IconButton>
        <Drawer open={isOpen} anchor='right' onClose={()=>setIsOpen(false)}>
            <Box width="250px" textAlign="center">
                <Typography variant="h6" component="div">
                    Drawer Örnek
                </Typography>
            </Box>
        </Drawer>
   </>
  )
}

export default CustomDrawer