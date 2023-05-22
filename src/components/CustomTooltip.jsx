import React from 'react'
import {Tooltip,TextField,InputAdornment,IconButton} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete";

function CustomTooltip() {
  return (
            <Tooltip title="Sil" placement='right'>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
  )
}

export default CustomTooltip