import { Box, Button} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {Language} from '@mui/icons-material'

const LanguageButton = () => {
  const {i18n}=useTranslation()
    const changeLang = (lang) => {
      if (lang === "ENGLISH") {
          i18n.changeLanguage("enUS")
        localStorage.setItem('i18nextLn', JSON.stringify("enUS"))
        document.getElementById('body').style.direction ='ltr'
        
      } else {
        i18n.changeLanguage("arEG")
        localStorage.setItem('i18nextLn' ,JSON.stringify("arEG"))
        document.getElementById('body').style.direction ='rtl'

      }

  }
  return (
      <Box m={1}>
      <Button sx={{color:'#fff'}} startIcon={<Language sx={{ color:'#fff' }} />} dir='ltr' onClick={(e)=>{changeLang(e.target.innerText)}}>
             {i18n.language === "arEG" ? "English" : "عربي"} 
          </Button>
    </Box>
  );
}

export default LanguageButton;
