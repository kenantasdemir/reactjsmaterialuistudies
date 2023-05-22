import { Badge, Stack } from '@mui/material'
import MailIcon from "@mui/icons-material/Mail"
import React from 'react'

function CustomBadge() {
  return (
        <Stack spacing={10} sx={{
                marginTop:20,
                marginBottom:"auto",
        }} direction="row">
              

                <Badge color='primary' variant='dot'
                        anchorOrigin={{
                            vertical:"bottom",
                            horizontal:"right"
                        }}
                >
                        <MailIcon/>
                </Badge>

                <Badge  color='primary' badgeContent={50} showZero>
                        <MailIcon />
                </Badge>

                <Badge color="secondary" badgeContent={1000} max={999}>
                        <MailIcon />
                </Badge>


        </Stack>
  )
}

export default CustomBadge