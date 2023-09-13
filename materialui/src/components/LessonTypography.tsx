import React from 'react'
import { Typography } from '@mui/material'

const LessonTypography = () => {
  return (
    <>
    <div>
      <Typography variant='body1'>Body 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam culpa mollitia est tempore ex recusandae vitae officia ullam sapiente, ducimus dignissimos deserunt adipisci, aspernatur debitis doloremque explicabo odit beatae. Quo?</Typography>
    </div>
    <div>
      <Typography variant='body2'>Body 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam culpa mollitia est tempore ex recusandae vitae officia ullam sapiente, ducimus dignissimos deserunt adipisci, aspernatur debitis doloremque explicabo odit beatae. Quo?</Typography>
    </div>
    <div>
      <Typography variant='h1'>h1 görünüm</Typography>
      <Typography variant='h2'>h2 görünüm</Typography>
      <Typography variant='h3'>h3 görünüm</Typography>
      <Typography variant='h4'>h4 görünüm</Typography>
      <Typography variant='h5'>h5 görünüm</Typography>
      <Typography variant='h6'>h6 görünüm</Typography>
      {/* //h4 html etiketine h1 css özelliklerini uygula */}
      <Typography variant='h1' component='h4'>h1 görünüm</Typography>

      <Typography variant='h1' component='h4' align='left'>h1 görünüm</Typography>
      <Typography variant='h1' component='h4' align='right'>h1 görünüm</Typography>

      <Typography variant='subtitle1'>Alt başlık 1</Typography>
      <Typography variant='subtitle2'>Alt başlık 2</Typography>

    </div>

    </> 
  )
}

export default LessonTypography
