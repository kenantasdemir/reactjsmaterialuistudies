import React, { useState } from 'react'
import AppsIcon from "@mui/icons-material/Apps";
import { IconButton, Toolbar,Typography,Button, Stack,AppBar,Menu,MenuItem } from '@mui/material';

function CustomAppBar() {


    let [anchorEl,setAnchorEl] = useState(null)
    const openControl = Boolean(anchorEl)

    const handleClick = (event)=>{
        setAnchorEl(event.currentTarget)
    }

    const handleClose = (event) =>{
        setAnchorEl(null)
    }


  return ( 
    <AppBar>
        <Toolbar>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <Typography variant="h6" component="div">
                Header
            </Typography>
            <Stack direction="row" sx={{
                marginLeft:"auto"
            }}>
                <Button sx={{color:"white"}}>MenuItem Buton 1</Button>
                <Button sx={{color:"white"}}>MenuItem Buton 2</Button>
                <Button sx={{color:"white"}}>MenuItem Buton 3</Button>
                <Button sx={{color:"white"}}>MenuItem Buton 4</Button>
                <Button sx={{color:"white"}}>MenuItem Buton 5</Button>
                <Button sx={{color:"white"}} onClick={handleClick}>MenuItem Buton 6</Button>
            </Stack>

            <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
                    <MenuItem onClick={handleClose}>Kitaplar</MenuItem>
            </Menu>

        </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar