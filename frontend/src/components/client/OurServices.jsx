import {Box,  Typography, Container,  Grid} from "@mui/material";
import React, { useState} from "react";
import {
  apps,
  disens,
  web_deve2,
  web_deve,
  markiting
} from "../../img/servise_icones";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {KeyboardArrowDownOutlined} from "@mui/icons-material";

export default function OurServices() {
  const list = [
    {
      title: "Homepage.tab_mobile_services",
      icon: apps,
      desc_en: `Want to dominate the tiny screens between their hand? We have your back with deploying the latest techniques and tech tools to create eye-popping UI/UX, so they can't get enough of you app.

      `,
      desc_ar: `ملايين التطبيقات تتنافس على امتلاك ولاء العملاء، ولكنك معنا دائما في المقدمة عبر تطوير تطبيقات الموبايل بأحدث التقنيات لخلق تجربة مميزة وواجهات مريحة للمستخدمين يتعاملون معها لساعات ويحصلون على خدماتك ومنتجاتك بكل سهولة عبر هواتفهم الذكية في أي وقت.

      `
    },
    {
      title: "Homepage.tab_maintenance_services",
      icon: disens,
      desc_en: `No More sudden 404s, useless buttons or sleepless night because server is down, our experts are working around the clock to ensure that all your digital entities are up and running in full performance.

        `,
      desc_ar: `الاحتفاظ بولاء عملائك ونيل رضاهم يأتي من قدرتك على تلبية احتياجاتهم عبر المنصات الإلكترونية لشركتك، لذلك فأنت بحاجة إلى شريك قوي يضمن لك دعم فني 24/7 كي تتمكن من الثقة بنجاحك.

        `
    },
    {
      title: "Homepage.tab_designing_services",
      icon: markiting,
      desc_en: `Stand out of the competition and make your customers differentiate you among thousands with your distinctive identity.

        `,
      desc_ar: `هويتك عنوانك، لذلك نهتم بتصميم وابتكار هويات بصرية فريدة تميز عملائنا وتتواءم مع أهداف شركاتهم ومجالاتها المختلفة، لتصبح هويتهم شعارًا لنجاحهم.

        `
    },
    {
      title: "Homepage.tab_marketing_services",
      icon: web_deve,
      desc_en: `No more exaggerated budgets or random targets, we're working on well-studied digital plans for marketing content, products, services or anything you offer customers to make them fullfilled.

        `,
      desc_ar: `منصات التواصل الاجتماعي أصبحت عالم غني بالفرص الترويجية التي عليك اقتناصها لتصل إلى جمهورك المستهدف بخطة تسويقية قائمة على محتوى مميز يعرض خدماتك بأسلوب جذاب وشيق،

        `
    },
    {
      title: "Homepage.tab_web_services",
      icon: web_deve2,
      desc_en: `It is not just a landing page, It is ART. We concentrate on making unique experiences fit your customers' needs to get them satisfied, so forget about the Bounce rate!

        `,
      desc_ar: `موقعك على الإنترنت هو نافذة رئيسية تقدم شركتك إلى العالم، لذا نعمل باحترافية على تصميم وتطوير تجربة إلكترونية فريدة لجمهورك عبر موقعك تلبي احتياجاتهم، وتجعلهم لا يملون قضاء وقت أطول،

        `
    }
  ];
  const {i18n} = useTranslation();
  const [value, setValue] = useState({data: list[0], index: 0});

  const handleChange = (ele, i) => {
    setValue({data: ele, index: i});
  };
   
  return (
    <Box mt={5} id={"service"}>
      <Box>
        <Typography py={3} textAlign={"center"} component={"h2"} variant="h4">
          {i18n.t("Homepage.Our_Services")}
        </Typography>
        <Typography
          color={"#707070"}
          textAlign={"center"}
          component={"p"}
          variant="h6"
          fontWeight={600}
        >
          {i18n.t("Homepage.sub_title_Services")}
        </Typography>
      </Box>
      <Container sx={{py: 10}}>
        <Grid container spacing={1}>
          {list.map((ele, index) => (
            <Grid
              item
              md={index % 2 === 0 ? 2 : 3}
              key={index}
              onClick={() => {
                handleChange(ele, index);
              }}
              xs={6}
            >
              <Box
                py={2}
                textAlign={"center"}
                width={"90%"}
                sx={
                  value.index !== index
                    ? {
                        cursor: "pointer",
                        borderBottom: "3px solid transparent"
                      }
                    : {
                        borderBottom: "3px solid #33b2c2",
                        transition: "ease-in-out .4s"
                      }
                }
              >
                <img src={ele.icon} alt={ele.title} width={100} />
                <Typography fontWeight={700}>{i18n.t(ele.title)}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box mt={10}>
          <Grid container spacing={1}>
            <Grid item md={4} xs={12}>
              <img src={value.data.icon} alt={value.data.title} width={"80%"} />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              flexWrap={"wrap"}
              alignItems={"center"}
            >
              <Typography
                color={"#707070"}
                component={"p"}
                variant="h6"
                fontWeight={600}
              >
                {i18n.language === "enUS"
                  ? value.data.desc_en
                  : value.data.desc_ar}
              </Typography>

              <Box mt={10}>
                <Link to={"/"}>
                  <Typography width={150} fontWeight={700} color="#f0c000">
                    {i18n.t("Homepage.more_about")} {i18n.t(value.data.title)}
                  </Typography>
                  <Box
                    width={110}
                    height={100}
                    display={"flex"}
                    flexDirection={"column"}
                    position={"relative"}
                    alignItems={"center"}
                    component={"center"}
                  >
                    <KeyboardArrowDownOutlined
                      sx={{fontSize: "60px"}}
                      color="primary"
                    />
                    <KeyboardArrowDownOutlined
                      className="KeyboardArrowDownOutlined"
                      sx={{fontSize: "60px"}}
                      color="primary"
                    />
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
