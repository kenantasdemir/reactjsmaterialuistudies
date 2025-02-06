import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';
import { useState } from 'react';

export const LessonSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  console.log(country);

  // const handleChange = () =>{

  // }
  return (
    <Box width="250px">
      {/* <TextField
        label="Ülke Seçiniz"
        select
        fullWidth
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">FRANCE</MenuItem>
      </TextField> */}
      <TextField
        SelectProps={{
          multiple: true,
        }}
        label="Ülke Seçiniz"
        select
        fullWidth
        value={country}
        onChange={(e) =>
          setCountry(
            typeof e.target.value === 'string'
              ? e.target.value.split(',')
              : e.target.value
          )
        }
      >
        <MenuItem value="TR">Türkiye</MenuItem>
        <MenuItem value="USA">ABD</MenuItem>
        <MenuItem value="FR">FRANCE</MenuItem>
      </TextField>
    </Box>
  );
};
