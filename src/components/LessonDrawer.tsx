import React from 'react';
import { Drawer, Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const LessonDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <IconButton size="large" onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} anchor="bottom" onClose={() => setIsOpen(false)}>
        <Box width="250px" textAlign="center">
          <Typography variant="h6" component="div">
            Soldaki Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
