import React from 'react'
import {Stack,AvatarGroup,Avatar} from "@mui/material"

function CustomAvatar() {
  return (
        <Stack spacing={4}>
            <AvatarGroup>
                <Avatar sx={{marginRight:10}} src="https://randomuser.me/api/portraits/men/24.jpg"/>
                <Avatar src='https://randomuser.me/api/portraits/men/28.jpg'/>
            </AvatarGroup>
            <AvatarGroup>
                <Avatar variant='rounded' sx={{marginRight:10,bgcolor:"primary.light",width:50,height:50}} src="https://randomuser.me/api/portraits/men/24.jpg"/>
                <Avatar variant='square' src='https://randomuser.me/api/portraits/men/28.jpg'/>
            </AvatarGroup>
        </Stack>
  )
}

export default CustomAvatar