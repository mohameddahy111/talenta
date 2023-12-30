import React from "react";
import FirstSectionHome from "../components/client/FirstSectionHome";
import { Box } from "@mui/material";
import OurServices from "../components/client/OurServices";
import Notes from "../components/client/Notes";
import HowAreWe from "../components/client/HowAreWe";
import WhyChooseUs from "../components/client/WhyChooseUs";

export default function Home() {
  return (
    <Box>
      <FirstSectionHome />
      <OurServices />
      <Notes text={'notes.note_1'} img={'https://talenta.com.co/frontend/public/web/img/talenta/start-project-bg-right.png'} />
      <HowAreWe/>
      <WhyChooseUs/>
      <Notes text={'notes.note_2'} bgc={"#33b2c2"} />
    </Box>
  );
}
