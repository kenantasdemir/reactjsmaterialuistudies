import React from 'react';
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useState } from 'react';

export const LessonLoadingButton = () => {
  const [value, setValue] = useState(false);
  return (
    <Stack direction="row">
      <LoadingButton loading>Kaydet</LoadingButton>
      <LoadingButton
        loading={value}
        onClick={() => {
          setValue(true);
        }}
        variant="outlined"
      >
        Kaydet
      </LoadingButton>
    </Stack>
  );
};
