import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useState } from 'react';

export const LessonDateTime = () => {
  const [value, setValue] = useState<Dayjs | null>(null);
  console.log(value);
  return (
    <Stack>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          label="Tarih"
          renderInput={(params) => <TextField {...params} />}
        /> */}
        <TimePicker
          label="Time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

   
    </Stack>
  );
};
