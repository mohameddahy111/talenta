import {
  Box,
  Button,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import {useFormik} from "formik";
import React, {useEffect, useState} from "react";
import * as yup from "yup";
import {Store} from "../../context/DataStore";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export default function AddAdmin() {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const {axiosToken} = Store();
  const formData = new FormData();
  const [photo, setPhoto] = useState("");
  const validationSchema = yup.object({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    cPassword: yup.string().min(6).required(),
    phone: yup.number().required()
  });
  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
      phone: "",
      admin_img: ""
    },
    onSubmit: async (values) => {
      if (values.password !== values.cPassword) {
        enqueueSnackbar("password not match", { variant: 'error' })
        return
      }
      Object.keys(values).map((value) => {
        return formData.append(value, values[value]);
      });
      await axios
        .post(`/admins/add_admin`, formData ,axiosToken)
        .then((res) => {
          if (res.status === 2001) {
            enqueueSnackbar(`${res.data}`, { variant: "success" })
            navigate('/admins/dashboard/')
          }
        })
        .catch((err) => {
          enqueueSnackbar(`${err.response.data}`, {variant: "error"});
        });
    }
  });

  useEffect(() => {
    formik.values.admin_img = photo[0];
  }, [photo]);
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            {photo ? (
              <Box width={"100%"}>
                <img
                  src={URL.createObjectURL(photo[0])}
                  alt="admin_photo"
                  width={"100%"}
                />
              </Box>
            ) : null}
            <Typography component={"p"} variant="caption">
              {" "}
              Add photo
            </Typography>

            <TextField
              type="file"
              fullWidth
              onChange={(e) => setPhoto(e.target.files)}
            />
          </Grid>
          <Grid item md={8} xs={12}>
            <Grid container spacing={1}>
              <Grid item md={6} sm={6} xs={12}>
                <TextField
                  name={"name"}
                  label={"Name"}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  inputProps={{type: "text"}}
                  fullWidth
                  sx={{textTransform: "capitalize"}}
                  autoComplete={"current-text"}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextField
                  name={"email"}
                  label={"Email"}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  inputProps={{type: "email"}}
                  fullWidth
                  sx={{textTransform: "capitalize"}}
                  autoComplete={"current-email"}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextField
                  name={"password"}
                  label={"Password"}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  inputProps={{type: "password"}}
                  fullWidth
                  sx={{textTransform: "capitalize"}}
                  autoComplete={"current-password"}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextField
                  name={"cPassword"}
                  label={"confirm Password"}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.cPassword && Boolean(formik.errors.cPassword)
                  }
                  helperText={
                    formik.touched.cPassword && formik.errors.cPassword
                  }
                  inputProps={{type: "password"}}
                  fullWidth
                  sx={{textTransform: "capitalize"}}
                  autoComplete={"current-password"}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <TextField
                  name={"phone"}
                  label={"Phone"}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  inputProps={{type: "number"}}
                  fullWidth
                  sx={{textTransform: "capitalize"}}
                  autoComplete={"current-password"}
                />
              </Grid>
            </Grid>
            <Button sx={{mt: "20px"}} variant="contained" type="submit">
              Add admin
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
