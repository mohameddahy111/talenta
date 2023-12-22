import React from "react";
import {AppBar, Box,  Container, Toolbar} from "@mui/material";
import {Outlet} from "react-router-dom";
import LanguageButton from "../components/admins/LanguageButton";
import ProfileAdminMenu from "../components/admins/ProfileAdminMenu";
import { Store } from "../context/DataStore";

export default function AdminLayout() {
  const {adminIfo} =Store()
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#33b2c2" }} >
          <Container sx={{display :'flex' , justifyContent:'space-between' , alignItems:'center'}}>
          <Box>
            <LanguageButton/>
            </Box>
            <Box>
              <img src="" alt=""/>
            </Box>
            <Box >
              {adminIfo && <ProfileAdminMenu data={ adminIfo} /> }
             
            </Box>

          </Container>
        </Toolbar>
      </AppBar>
      <main>{<Outlet />}</main>
    </Box>
  );
}
