import {Box, Container, Grid, Typography} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
import why_1 from "../../img/svg/why_1.svg";
import why_2 from "../../img/svg/why_2.svg";
import why_3 from "../../img/svg/why_3.svg";
import why_4 from "../../img/svg/why_4.svg";
import QualtyBox from "./QualtyBox";

export default function WhyChooseUs() {
  const {i18n} = useTranslation();
  const list = [
    {
      title: i18n.t("why-choose-us.QualtyBox.Quality_Standards.title"),
      icon: why_1,
      pragraph: i18n.t("why-choose-us.QualtyBox.Quality_Standards.pragraph")
    },
    {
      title: i18n.t("why-choose-us.QualtyBox.Strategic_Planning.title"),
      icon: why_2,
      pragraph: i18n.t("why-choose-us.QualtyBox.Strategic_Planning.pragraph")
    },
    {
      title: i18n.t("why-choose-us.QualtyBox.High_Experience.title"),
      icon: why_3,
      pragraph: i18n.t("why-choose-us.QualtyBox.High_Experience.pragraph")
    },
    {
      title: i18n.t("why-choose-us.QualtyBox.Creativity_And_Innovation.title"),
      icon: why_4,
      pragraph: i18n.t(
        "why-choose-us.QualtyBox.Creativity_And_Innovation.pragraph"
      )
    }
  ];
  return (
    <Box className="WhyChooseUs_bg" pb={10}>
      <Container>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12} p={10} mt={10}>
            <img
              src="https://talenta.com.co/frontend/public/web/img/talenta/landing/landing-2.png"
              alt=""
              width={"100%"}
            />
          </Grid>
          <Grid item md={6} xs={12} color={"#fff"} mt={10} textAlign={"center"}>
            <Typography component={"h1"} variant="h3" fontWeight={900}>
              {i18n.t("why-choose-us.title")}{" "}
              <Typography
                component={"span"}
                variant="h3"
                fontWeight={900}
                color={"#33b2c2"}
              >
                {i18n.language === "enUS" ? "?" : "؟"}
              </Typography>
            </Typography>
            <Typography
              pt={10}
              component={"p"}
              variant="h6"
              width={"600"}
              textAlign={"justify"}
            >
              {i18n.t("why-choose-us.pragraph")}
            </Typography>
          </Grid>
        </Grid>
          {list.map((ele, index) => (
            <QualtyBox key={index} data={{ele, index}} />
          ))}
      </Container>
    </Box>
  );
}
