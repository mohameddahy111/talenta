import React from 'react'
import logo1 from "../../img/landing-3.png";
import {Box, Button, Grid, Link, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import titlLogo from "../../img/title_logo.png";
import { Store } from '../../context/DataStore';


export default function FirstSectionHome() {
  const { i18n } = useTranslation();
  const {mobileDivice} = Store()


  return (
    <Box py={10} px={5} bgcolor={"#2f2f2f"} color={"#fff"}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <img src={logo1} alt="logo1" width={"100%"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
                      px={4}
                      py={4}
            display={"flex"}
            justifyContent={"space-evenly"}
            flexDirection={"column"}
            alignItems={"center"}
            height={"100%"}
          >
            <Box>
              <img src={titlLogo} alt="logo1" width={"100%"} />
            </Box>
            <Box py={mobileDivice && 3}>
              <Typography
                textTransform={"capitalize"}
                fontWeight={700}
                component={"h1"}
                variant={ mobileDivice ?"h4" :"h3"}
              >
                {i18n.t("Homepage.mastr_title")}
              </Typography>
              <Typography
                pt={3}
                textTransform={"capitalize"}
                component={"p"}
                variant="body1"
              >
                {i18n.t("Homepage.sub_title")}
              </Typography>
            </Box>
            <Link href='#service' 
              width={200}
              bgcolor={'#33b2c2'}
              color={'#fff'}
              py={2} px={3}
              height={50}
              textAlign={'center'}
              borderRadius={'10px'}

              
              sx={{
                fontWeight: "600",mt:"10px",textDecoration:"none",':active':{bgcolor :"#33b2c2b2"},
                fontSize: i18n.language !== "enUS" && "20px"
              }}
            >
              {i18n.t("Homepage.button_service")}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
