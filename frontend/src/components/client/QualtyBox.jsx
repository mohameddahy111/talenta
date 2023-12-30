import {Box, Grid, Typography} from "@mui/material";
import React from "react";

export default function QualtyBox({data}) {
  return (
    <Grid
      container
      spacing={1}
      direction={data.index % 2 ? "row-reverse" : "row"}
    >
      <Grid item md={6} xs={12}>
        <Box
          color={"#fff"}
          display={"flex"}
          justifyContent={""}
          alignItems={"start"}
          gap={2}
        >
          <Box className={"hh"} color={"#fff"} borderBottom={"3px solid #fff"}>
            {[...Array(data.index + 1).keys()].map((e, index) => (
              <Typography
                lineHeight={"50px"}
                p={0}
                m={0}
                fontWeight={900}
                fontSize={70}
                key={index}
                component={"span"}
                color={"#fff"}
              >
                .
              </Typography>
            ))}
          </Box>
          <Typography component={"h2"} variant="h3" fontWeight={900}>
            {data.ele.title}
          </Typography>
        </Box>
        <Typography component={"p"} variant="h6" color={"#fff"} p={2}>
          {data.ele.pragraph}
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
        textAlign={"center"}
        mb={3}
        py={5}
        borderBottom={"3px solid #fff"}
      >
        <img src={data.ele.icon} alt={data.ele.title} width={"35%"} />
      </Grid>
    </Grid>
  );
}
