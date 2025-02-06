import React from 'react';
import { Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const LessonButton = () => {
  return (
    <Stack spacing={4} display="block">
      <Stack direction="row" spacing={2}>
        <Button variant="text" color="primary" size="small" disableElevation>Text</Button>
        <Button variant="outlined" color="success" size="medium">Outlined</Button>
        <Button variant="contained" color="error" size="large">Contained</Button>
        <Button variant="contained" color="warning">Contained</Button>
      </Stack>

      <Stack direction="row" spacing={2}>
        <AddIcon color="error" />

        <Button variant="contained" startIcon={<AddIcon />}>
          Ekle
        </Button>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => alert('Tıklandı.')}
        >
          Ekle
        </Button>
      </Stack>
    </Stack>
  );
};
