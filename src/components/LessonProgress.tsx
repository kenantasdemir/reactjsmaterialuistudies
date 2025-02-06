import React from 'react';
import { CircularProgress, Stack, LinearProgress } from '@mui/material';

export const LessonProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />

      <CircularProgress variant="determinate" value={100} color="success" />

      <LinearProgress />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={50} color="success" />
    </Stack>
  );
};
