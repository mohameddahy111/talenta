import {
  Box,
  Grid,
  List,
  ListItem,
  TextField,
  Typography,Button
} from "@mui/material";
import {useTranslation} from "react-i18next";
import * as yup from "yup";
import {useFormik} from "formik";
import axios from "axios";
import { Store } from "../../context/DataStore";

export default function AddProject() {
  const {token}=Store()
  const formData = new FormData();
  const validationSchema = yup.object({
    name: yup.object({
      ar: yup.string().min(2).required(),
      en: yup.string().min(2).required()
    }),
    discrpion: yup.object({
      ar: yup.string().min(2).required(),
      en: yup.string().min(2).required()
    }),
    link: yup.string().min(2).required(),
    interFace: yup.object({
      ar: yup.string().min(2).required(),
      en: yup.string().min(2).required()
    }),
    mobil_App: yup.object({
      discrpion: yup.object({
        ar: yup.string().min(2).required(),
        en: yup.string().min(2).required()
      }),
      links: yup.object({
        apple_Store: yup.string().min(2).required(),
        google_store: yup.string().min(2).required()
      })
    })
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: {
        ar: "",
        en: ""
      },
      discrpion: {
        ar: "",
        en: ""
      },
      link: "",
      interFace: {
        ar: "",
        en: ""
      },
      mobil_App: {
        discrpion: {
          ar: "",
          en: ""
        },
        links: {
          apple_Store: "",
          google_store: ""
        }
      },
      logo: "",
      web_min_img: "",
      mobile_min: "",
      web_images: [],
      mobile_iamges: []
    },
    onSubmit: async (values) => {
      //----------------------------------------------------------------
      formData.append("logo", values.logo);
      formData.append("web_min_img", values.web_min_img);
      formData.append("mobile_min", values.mobile_min);
      Object.keys(values.web_images).map((img, index) => {
      return formData.append(`web_images`, values.web_images[img] )
      });
      Object.keys(values.web_images).map((img, index) => {
      return formData.append(`mobile_iamges`, values.mobile_iamges[img] )
      });
      formData.append("name[en]", values.name.en);
      formData.append("name[ar]", values.name.ar);
      formData.append("interFace[ar]", values.interFace.ar);
      formData.append("interFace[en]", values.interFace.en);
      formData.append("discrpion[ar]", values.discrpion.ar);
      formData.append("discrpion[en]", values.discrpion.en);
      formData.append(
        "mobil_App[discrpion][en]",
        values.mobil_App.discrpion.en
      );
      formData.append(
        "mobil_App[discrpion][ar]",
        values.mobil_App.discrpion.ar
      );
      formData.append("link", values.link);
      formData.append(
        "mobil_App[links][apple_Store]",
        values.mobil_App.links.apple_Store
      );
      formData.append(
        "mobil_App[links][google_store]",
        values.mobil_App.links.google_store
      );
      await axios
        .post("/project/", formData, {
          headers: {"Content-Type": "multipart/form-data" , Authorization : `Bearer ${token}`}
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
  const {i18n} = useTranslation();
  const imagesAdd = (e, f) => {
    if (f.length > 1) {
      formik.values[e] = f;
    } else {
      formik.values[e] = f[0];
    }
  };

  return (
    <Box>
      <form encType="multipart/form-data" onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item md={12} xs={12}>
            <fieldset>
              <Typography textTransform={"capitalize"} textAlign={"center"}>
                {i18n.t("dashboard.AddProject.general")}
              </Typography>
            </fieldset>
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem sx={{border: "1px solid #000"}}>
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                >
                  <Typography component={"label"}> logo img</Typography>
                  <input
                    type="file"
                    name="logo"
                    onChange={(e) => {
                      imagesAdd(e.target.name, e.target.files);
                    }}
                  />
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={9} xs={12}>
            <Grid container spacing={1}>
              <Grid item md={6} xs={12}>
                <List>
                  <ListItem>
                    <TextField
                      name="name.en"
                      label={i18n.t("form.name.en")}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.name?.en &&
                        Boolean(formik.errors.name?.en)
                      }
                      helperText={
                        formik.touched.name?.en && formik.errors.name?.en
                      }
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      multiline
                      rows={5}
                      name="discrpion.en"
                      label={i18n.t("form.discrpion.en")}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.discrpion?.en &&
                        Boolean(formik.errors.discrpion?.en)
                      }
                      helperText={
                        formik.touched.discrpion?.en &&
                        formik.errors.discrpion?.en
                      }
                      fullWidth
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={6} xs={12}>
                <List>
                  <ListItem>
                    <TextField
                      fullWidth
                      name="name.ar"
                      label={i18n.t("form.name.ar")}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.name?.ar &&
                        Boolean(formik.errors.name?.ar)
                      }
                      helperText={
                        formik.touched.name?.ar && formik.errors.name?.ar
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      multiline
                      rows={5}
                      name="discrpion.ar"
                      label={i18n.t("form.discrpion.ar")}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.discrpion?.ar &&
                        Boolean(formik.errors.discrpion?.ar)
                      }
                      helperText={
                        formik.touched.discrpion?.ar &&
                        formik.errors.discrpion?.ar
                      }
                      fullWidth
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={12} xs={12}>
            <fieldset>
              <Typography textTransform={"capitalize"} textAlign={"center"}>
                {i18n.t("dashboard.AddProject.web")}
              </Typography>
            </fieldset>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography
              textTransform={"capitalize"}
              component={"h6"}
              variant="h6"
              textAlign={"center"}
            >
              inter Face
            </Typography>

            <List>
              <ListItem sx={{border: "1px solid #000", my: "10px"}}>
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                >
                  <Typography dir="ltr" component={"label"}>
                    {" "}
                    main image
                  </Typography>
                  <input
                    type="file"
                    name="web_min_img"
                    onChange={(e) => {
                      imagesAdd(e.target.name, e.target.files);
                    }}
                  />
                </Box>
              </ListItem>
              <ListItem sx={{border: "1px solid #000"}}>
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                >
                  <Typography component={"label"}> swiper Images </Typography>
                  <input
                    type="file"
                    name="web_images"
                    multiple
                    onChange={(e) => {
                      imagesAdd(e.target.name, e.target.files);
                    }}
                  />
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={9} xs={12}>
            <Grid container spacing={1} mt={3}>
              <Grid item md={6} xs={12}>
                <Grid item md={12} xs={12}></Grid>
                <List>
                  <ListItem>
                    <TextField
                      multiline
                      rows={5}
                      name="interFace.en"
                      label={i18n.t("form.discrpion.en")}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.interFace?.en &&
                        Boolean(formik.errors.interFace?.en)
                      }
                      helperText={
                        formik.touched.interFace?.en &&
                        formik.errors.interFace?.en
                      }
                      fullWidth
                    />
                  </ListItem>
                  <ListItem>
                    <TextField
                      error={formik.touched.link && Boolean(formik.errors.link)}
                      helperText={formik.touched.link && formik.errors.link}
                      label={"Website Link"}
                      name="link"
                      onChange={formik.handleChange}
                      placeholder="www. exmple.com"
                      fullWidth
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={6} xs={12}>
                <List>
                  <ListItem>
                    <TextField
                      multiline
                      rows={5}
                      name="interFace.ar"
                      label={i18n.t("form.discrpion.ar")}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.interFace?.ar &&
                        Boolean(formik.errors.interFace?.ar)
                      }
                      helperText={
                        formik.touched.interFace?.ar &&
                        formik.errors.interFace?.ar
                      }
                      fullWidth
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <fieldset>
              <Typography textTransform={"capitalize"} textAlign={"center"}>
                {i18n.t("dashboard.AddProject.mobile")}
              </Typography>
            </fieldset>
          </Grid>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem sx={{border: "1px solid #000", my: "10px"}}>
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                >
                  <Typography component={"label"}> main image</Typography>
                  <input
                    type="file"
                    name="mobile_min"
                    onChange={(e) => {
                      imagesAdd(e.target.name, e.target.files);
                    }}
                  />
                </Box>
              </ListItem>
              <ListItem sx={{border: "1px solid #000"}}>
                <Box
                  display={"flex"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                >
                  <Typography component={"label"}> swiper Images </Typography>
                  <input
                    type="file"
                    name="mobile_iamges"
                    onChange={(e) => {
                      imagesAdd(e.target.name, e.target.files);
                    }}
                    multiple
                  />
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={1} mt={3}>
              <Grid item md={6} xs={12}>
                <Grid item md={12} xs={12}></Grid>
                <List>
                  <ListItem>
                    <TextField
                      multiline
                      rows={5}
                      name="mobil_App.discrpion.en"
                      label={i18n.t("form.discrpion.en")}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.mobil_App?.discrpion?.en &&
                        Boolean(formik.errors.mobil_App?.discrpion?.en)
                      }
                      helperText={
                        formik.touched.mobil_App?.discrpion?.en &&
                        formik.errors.mobil_App?.discrpion?.en
                      }
                      fullWidth
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={6} xs={12}>
                <List>
                  <ListItem>
                    <TextField
                      multiline
                      rows={5}
                      name="mobil_App.discrpion.ar"
                      label={i18n.t("form.discrpion.ar")}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.mobil_App?.discrpion?.ar &&
                        Boolean(formik.errors.mobil_App?.discrpion?.ar)
                      }
                      helperText={
                        formik.touched.mobil_App?.discrpion?.ar &&
                        formik.errors.mobil_App?.discrpion?.ar
                      }
                      fullWidth
                    />
                  </ListItem>
                </List>
              </Grid>
              <Box
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                gap={2}
              >
                <TextField
                  error={
                    formik.touched.mobil_App?.links?.apple_Store &&
                    Boolean(formik.errors.mobil_App?.links?.apple_Store)
                  }
                  helperText={
                    formik.touched.mobil_App?.links?.apple_Store &&
                    formik.errors.mobil_App?.links?.apple_Store
                  }
                  label={"Apple Store Link"}
                  name="mobil_App.links.apple_Store"
                  onChange={formik.handleChange}
                  placeholder="www.example.com"
                  fullWidth
                />
                <TextField
                  error={
                    formik.touched.mobil_App?.links?.google_store &&
                    Boolean(formik.errors.mobil_App?.links?.google_store)
                  }
                  helperText={
                    formik.touched.mobil_App?.links?.google_store &&
                    formik.errors.mobil_App?.links?.google_store
                  }
                  label={"Play Store Link"}
                  name="mobil_App.links.google_store"
                  onChange={formik.handleChange}
                  placeholder="www. exmple.com"
                  fullWidth
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Button variant='contained' type="submit">add</Button>
      </form>
    </Box>
  );
}
