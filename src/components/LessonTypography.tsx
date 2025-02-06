import { Typography } from '@mui/material';

export const LessonTypography = () => {
  return (
    <div>
        <Typography variant='body1'>Body1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus eum cum molestiae illo ullam quasi iste eos assumenda nemo. Saepe, dolore ipsum ducimus optio reiciendis ex veritatis rem quisquam?</Typography>
        <Typography variant='body2'>Body2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptatibus eum cum molestiae illo ullam quasi iste eos assumenda nemo. Saepe, dolore ipsum ducimus optio reiciendis ex veritatis rem quisquam?</Typography>


        <Typography variant='h1'>H1 GÖRÜNÜMÜ</Typography>
        <Typography variant='h2'>H2 GÖRÜNÜMÜ</Typography>
        <Typography variant='h3'>H3 GÖRÜNÜMÜ</Typography>
        <Typography variant='h4'>H4 GÖRÜNÜMÜ</Typography>
        <Typography variant='h5'>H5 GÖRÜNÜMÜ</Typography>
        <Typography variant='h6'>H6 GÖRÜNÜMÜ</Typography>

        <Typography variant='h1' component='h4'>H1 GÖRÜNÜMÜ</Typography>

        <Typography variant='h1' component='h4' align='left'>H1 GÖRÜNÜMÜ</Typography>
        <Typography variant='h1' component='h4' align='right'>H1 GÖRÜNÜMÜ</Typography>


        <Typography variant='subtitle1'>Alt Başlık 1</Typography>
        <Typography variant='subtitle2'>Alt Başlık 2</Typography>
    </div>
  )
}
