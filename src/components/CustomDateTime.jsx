import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import { Box, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


function CustomDateTime() {

    let [value,setValue] = useState(null)

    let [dateRangeValue,setDateRangeValue] = useState([null,null])

  return (
     <Stack width={400}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker value={value} onChange={(newValue)=>setValue(newValue)} label="Tarih" renderLoading={(params)=><TextField {...params}/>}/>
                <TimePicker label="Saat" value={value} onChange={(newValue)=>setValue(newValue)} renderLoading={(params)=><TextField {...params}  />} />
             
        
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{start:"başlangıç ",end:"Bitiş "}}>
    
                <DateRangePicker label="date range example" value={dateRangeValue} onChange={(newValue)=>setDateRangeValue(newValue)}
                        renderLoading={(startProps,endProps)=>{
                            <>
                                <TextField {...startProps} />
                                <Box sx={{mx:2}}> e kadar </Box>
                                <TextField {...endProps} />  
                            </>
                        }}
                />
        
        </LocalizationProvider>
     </Stack>
  )
}

export default CustomDateTime