import React from 'react';
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import { useState } from 'react';

export const LessonCheckbox = () => {
  const [isAccept, setIsAccept] = useState(false);
  const [knowlegde, setKnowlegde] = useState<string[]>([]);
  console.log(knowlegde);

  const handleKnowlegdeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = knowlegde.indexOf(event.target.value);
    if (index === -1) {
      setKnowlegde([...knowlegde, event.target.value]);
    } else {
      setKnowlegde(knowlegde.filter((item) => item !== event.target.value));
    }
  };
  //   console.log(isAccept);
  return (
    <Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel disabled control={<Checkbox />} label="Lise" />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Üniversite"
            />
            <FormControlLabel control={<Checkbox />} label="İlkokul" />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Eğitim Durumu</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isAccept}
                  onChange={(e) => setIsAccept(e.target.checked)}
                />
              }
              label="Kullanım Koşullarını Kabul Ediyorum."
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Frontend de Neleri Biliyorsun?</FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="react"
              control={
                <Checkbox
                  checked={knowlegde.includes('react')}
                  onChange={handleKnowlegdeChange}
                />
              }
              label="React Js"
            />
            <FormControlLabel
              value="angular"
              control={
                <Checkbox
                  checked={knowlegde.includes('angular')}
                  onChange={handleKnowlegdeChange}
                />
              }
              label="Angular"
            />
            <FormControlLabel
              value="vue"
              control={
                <Checkbox
                  checked={knowlegde.includes('vue')}
                  onChange={handleKnowlegdeChange}
                />
              }
              label="Vue Js"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
