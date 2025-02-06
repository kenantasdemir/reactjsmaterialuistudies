import React from 'react';
import { Button, Stack, ButtonGroup } from '@mui/material';

export const LessonButtonGroup = () => {
  return (
    <Stack direction="row">
   
      <ButtonGroup
        variant="text"
        orientation="vertical"
        size="small"
        color="error"
      >
        <Button>Butonum</Button>
        <Button>Butonum</Button>
        <Button>Butonum</Button>
      </ButtonGroup>
    </Stack>
  );
};
