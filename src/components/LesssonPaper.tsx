import React from 'react';
import { Paper, Box } from '@mui/material';

export const LesssonPaper = () => {
  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <Paper sx={{ width: 100, height: 100 }} />
      <Paper sx={{ width: 100, height: 100 }} elevation={0} />
      <Paper sx={{ width: 100, height: 100 }} elevation={1} />
      <Paper sx={{ width: 100, height: 100 }} elevation={2} />
      <Paper sx={{ width: 100, height: 100 }} elevation={3} />
      <Paper sx={{ width: 100, height: 100 }} variant="outlined" />
      <Paper sx={{ width: 100, height: 100 }} variant="outlined" square />
    
      <Paper sx={{width: 100, height:100}} elevation={1} variant="outlined" square></Paper>
    

    

    </Box>
  );
};
