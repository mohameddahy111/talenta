import {Box, Typography} from "@mui/material";
import React from "react";
import FormLogin from "../components/admins/FormLogin";
import '../css/login.css';
import {useTranslation } from 'react-i18next' 

export default function Login() {
  const {i18n} = useTranslation()
  return (
    <Box
      
      display={"flex"}
      justifyContent={"center"}
          alignItems={"center"}
      flexDirection={'column'}
      height={'100%'}
    >
      <Box px={2}>
        <Typography
          component={"h2"}
          variant="h4"
          fontWeight={700}
          textTransform={"capitalize"}
          textAlign={'center'}
          py={5}
         
        >
         {i18n.t('g.logHeaderTitle')}
        </Typography>
          </Box>
          <Box width={'90%'} maxWidth={'600px'} py={5}>
             <FormLogin/>
          </Box>
    </Box>
  );
}
