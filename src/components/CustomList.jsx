import React from 'react'
import {List,ListItem,ListItemButton,ListItemIcon,ListItemText} from "@mui/material"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftIcon from "@mui/icons-material/Drafts"

function CustomList() {
  return (
    <List>
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                        <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox"/>
            </ListItemButton>
        </ListItem>

        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <DraftIcon/>
                </ListItemIcon>
                <ListItemText primary="Draft"/>
            </ListItemButton>
        </ListItem>
    </List>
  )
}

export default CustomList