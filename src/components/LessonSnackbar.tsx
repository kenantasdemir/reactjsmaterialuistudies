import React from 'react';
import { Button, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export const LessonSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleClick = () => {
    setOpenSnackbar(true);
  };
  const handleClose = () => {
    setOpenSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Geri Al
      </Button>
      <IconButton>
        <CloseIcon sx={{ color: 'white' }} onClick={handleClose} />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div>
      <Button onClick={handleClick}>Snackbarı Aç</Button>
      <Snackbar
        open={openSnackbar}
        message="Hata mesajı aldınız"
        action={action}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />

      <Snackbar  
        open={openSnackbar}
        message="hata mesajı"
        action={action}
        autoHideDuration={2000}
        onClose={handleClick}
        anchorOrigin={{vertical:"bottom",horizontal:"right"}}
      />
    </div>
  );
};
