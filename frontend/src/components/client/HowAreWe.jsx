import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";

export default function HowAreWe() {
  const {i18n} = useTranslation();
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://talenta.com.co/frontend/public/web/img/how-are-we-bg.png)",
        backgroundSize: "cover",
              backgroundPosition: "center center",
          }}
          pt={10}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item md={7} xs={12}>
            <Typography component={"h1"} variant="h3" fontWeight={900} p={10}>
              {i18n.t("how_are_we.title")}
              <Typography
                component={"span"}
                fontWeight={900}
                variant="h3"
                px={1}
                color={"#33b2c2"}
              >
                {i18n.language === "enUS" ? "?" : "؟"}
              </Typography>
              <Typography component={"p"} variant="body1" py={5}>
                {i18n.t("how_are_we.pragraph")}
              </Typography>
            </Typography>
          </Grid>
          <Grid item md={5} xs={12} sx={{pt:5}}>
            <img
              src="https://talenta.com.co/frontend/public/web/img/talenta/landing/landing-1.png"
              alt="how_are_we"
              width={"100%"}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
