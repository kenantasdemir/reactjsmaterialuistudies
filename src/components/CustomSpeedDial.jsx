import { SpeedDial, SpeedDialAction,SpeedDialIcon } from '@mui/material'
import React from 'react'
import CopyIcon from "@mui/icons-material/FileCopyOutlined"
import PrintIcon from "@mui/icons-material/Print"
import ShareIcon from "@mui/icons-material/Share"
import EditIcon from "@mui/icons-material/Edit"

function CustomSpeedDial() {
  return (
    <SpeedDial ariaLabel='navigation' icon={<SpeedDialIcon openIcon={<EditIcon/>}/>}>
        <SpeedDialAction icon={<CopyIcon/>} tooltipTitle="Copy" tooltipOpen />
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle="Share" tooltipOpen/>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle="Print" tooltipOpen/>
    </SpeedDial>
  )
}

export default CustomSpeedDial