import { Grid } from '@mui/material'
import React from 'react'

function CustomGrid() {
  return (
    <Grid container>
        <Grid sx={{bgcolor:"primary.main"}} xs={8}>
            8 birimlik yer
            <Grid sx={{bgcolor:"success.main"}} item xs={7}>7 birimlik yer</Grid>
            <Grid sx={{bgcolor:"error.main"}} item xs={5}>5 birimlik yer</Grid>
        </Grid>
        <Grid sx={{bgcolor:"warning.main"}} xs={4}>4 birimlik yer</Grid>
    </Grid>

    )
}

export default CustomGrid