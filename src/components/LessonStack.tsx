import React from 'react';
import { Stack, Divider } from '@mui/material';

export const LessonStack = () => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </Stack>
  );
};
