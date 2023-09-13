import React from 'react'
import { Button, Stack } from '@mui/material'

const LessonButon = () => {
  return (
    <div>
        <Stack spacing={4}>
            <Stack direction='row' spacing={3}>
                 <Button variant='text'>text</Button>
                 <Button variant='outlined'>outlined</Button>
                 <Button variant='contained'>contained</Button>
             
            </Stack> 
            <Stack direction='row' spacing={3}>
                 <Button variant='text' color='primary'>Mavi</Button>
                 <Button variant='outlined' color='secondary'>Mor</Button>
                 <Button variant='contained' color='success'>Yeşil</Button>
                 <Button variant='contained' color='primary'>Mavi</Button>
                 <Button variant='contained' color='error'>Kırmızı</Button>
                 <Button variant='contained' color='warning'>Sarı</Button>
                 <Button variant='contained' color='info'>Açık Mavi</Button>
             
            </Stack> 
            <Stack direction='row' display='block' spacing={3}>
                <Button variant='contained' size='small' >Butonum</Button>
                <Button variant='contained' size='medium' >Butonum</Button>
                <Button variant='contained' size='large' >Butonum</Button>
            </Stack>
     </Stack>    
    </div>
  )
}

export default LessonButon
