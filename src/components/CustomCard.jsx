import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button
} from "@mui/material"

function CustomCard() {
  return (
        <Card sx={{
            width:350
        }}> 
            <CardMedia height="150" width="150" component="img" image="https://picsum.photos/200/300"/>
            <CardContent>
                    <Typography variant='h5' component="div">
                            Card Başlık
                    </Typography>
            </CardContent>
            <CardActions>
                <Button color='error'>Kapat</Button>
                <Button color='success'>Gönder</Button>
            </CardActions>
                 
        </Card>
  )
}

export default CustomCard