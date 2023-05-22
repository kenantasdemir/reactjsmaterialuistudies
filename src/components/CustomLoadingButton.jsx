import { Stack } from '@mui/material'
import React from 'react'
import {LoadingButton} from "@mui/lab"

function CustomLoadingButton() {
  return (
        <Stack>
            <LoadingButton loading>Kaydet</LoadingButton>
            <LoadingButton loading={false} variant='outlined'>Gönder</LoadingButton>
        </Stack>
  )
}

export default CustomLoadingButton