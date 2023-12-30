import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Notes({ text, bgc ,img }) {
    const {i18n} = useTranslation()
  return (
    <Box sx={{backgroundImage :img? `url(${img})` :null ,backgroundSize:"cover"  , backgroundPosition :"center"}} width={'100%'} height={70}  bgcolor={bgc&& bgc} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Typography px={3} textAlign={'center'} color={'#fff'} fontWeight={700} component={'h3'} variant="body1">
              {i18n.t(text)}
      </Typography>
    </Box>
  )
}
