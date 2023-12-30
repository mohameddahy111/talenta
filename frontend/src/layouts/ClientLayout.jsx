import {AppBar, Box, CssBaseline, ThemeProvider, Toolbar, createTheme} from "@mui/material";
import React from "react";
import {Outlet} from "react-router-dom";
import nav_logo from "../img/logo-nav.png";
import LanguageButton from "../components/admins/LanguageButton";
import FullScreenDialog from "../components/client/FullScreenDialog";

export default function ClientLayout() {
  const theme = createTheme({
    typography: {
      fontFamily: "Tajawal",
      h4: {
        fontFamily:"Tajawal-1"
      }
      
    },
    palette: {
      primary: {
        main:"#33b2c2"
      },
      secondary: {
        main:"#f0c000"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="static">
        <Toolbar sx={{display :'flex' , justifyContent:"space-between" }}>
          <Box>
            <LanguageButton/>
          </Box>
          <Box>
            <img src={nav_logo} alt="nav_logo" width={100} />
          </Box>
          <FullScreenDialog/>
        </Toolbar>
      </AppBar>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </ThemeProvider>
  );
}
