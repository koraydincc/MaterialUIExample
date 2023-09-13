import React from 'react'
import {TextField, Stack, InputAdornment} from '@mui/material'
import {useState} from 'react'

const LessonTextField = () => {

  const [value, setValue] = useState('')

  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Ad'></TextField>
            <TextField label='Ad' variant='outlined'></TextField>
            <TextField label='Ad' variant='filled'></TextField>
            <TextField label='Ad' variant='standard'></TextField>
            <TextField label='Ad' variant='outlined' color='error' size='small'></TextField>
            <TextField label='Ad' variant='outlined' helperText='Lütfen isminizi giriniz.' ></TextField>
            <TextField label='Ad' variant='outlined' helperText='Lütfen şifrenizi giriniz.' type='password' ></TextField>
            <TextField
            InputProps={{startAdornment:(
                <InputAdornment position='start'>Tl</InputAdornment>
            )}}
            label='Toplam'
            ></TextField>
            <TextField
            InputProps={{endAdornment:(
                <InputAdornment position='end'>$</InputAdornment>
            )}}
            label='Toplam'
            ></TextField>
            

        </Stack>
        <Stack direction='row'>
            <TextField
            onChange={(e)=> setValue(e.target.value)}
            value={value}
            type='password'
            label='Şifre'
            variant='outlined'
            helperText={!value ? 'Lütfen şifrenizi giriniz' : 'Şifrenizi kimseyle paylaşmayın'}
            ></TextField>

        </Stack>

    </Stack>
  )
}

export default LessonTextField
