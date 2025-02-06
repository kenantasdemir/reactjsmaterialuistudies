import React from 'react';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText,
  Button,
} from '@mui/material';
import { useState } from 'react';

export const LessonRadioExample = () => {
  const [value, setValue] = useState('');
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value === 'canboz') {
      setHelperText('Doğru cevap Tabiki Can Boz!');
      setError(false);
    } else if (value === 'ofCourseCanBoz') {
      setHelperText('Bravo Doğru Cevap!');
      setError(false);
    } else {
      setHelperText('Lütfen Seçim Yapınız');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl error={error}>
        <FormLabel>En Kapsamlı Frontend Eğitimini Veren Eğitmen Kim?</FormLabel>
        <RadioGroup onChange={handleRadioChange}>
          <FormControlLabel
            value="canboz"
            label="Can Boz"
            control={<Radio />}
          />
          <FormControlLabel
            value="ofCourseCanBoz"
            label="Tabiki Can Boz"
            control={<Radio />}
          />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined">
          Gönder
        </Button>
      </FormControl>
    </form>
  );
};
