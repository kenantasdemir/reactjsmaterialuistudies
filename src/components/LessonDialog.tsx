import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
} from '@mui/material';
import { useState } from 'react';

export const LessonDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  console.log(dialogOpen);
  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>Dialogu Aç</Button>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Hangisini seviyorsun?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Frontend frameworklerinden hangsini seviyorsunuz?
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Angular</Button>
            <Button onClick={() => setDialogOpen(false)}>React Js</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};
