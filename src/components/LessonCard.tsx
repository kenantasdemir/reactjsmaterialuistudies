import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

export const LessonCard = () => {
  return (
    <>
      <Card sx={{ width: 350 }}>
        <CardMedia height="150" component="img" image="https://source.unsplash.com/random"/>
        <CardContent>
          <Typography variant="h5" component="div">Başlığım</Typography>
          <Typography variant="body2" component="p">Başlığım </Typography>
        </CardContent>
        <CardActions>
          <Button color="error">Temizle</Button>
          <Button>Kaydet</Button>
        </CardActions>
      </Card>


      <Card sx={{ width: 350}}>
          <CardMedia height="150" component="img" image="uri" />
          <CardContent>Content</CardContent>
          <CardActions>

          </CardActions>
      </Card>
    </>
  );
};
