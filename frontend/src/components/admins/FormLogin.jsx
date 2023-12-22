import {Box, Card, List, ListItem, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import * as yup from "yup";
import {useFormik} from "formik";
import {LoadingButton} from "@mui/lab";
import {Login} from "@mui/icons-material";
import {Store} from "../../context/DataStore";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import axios from "axios";

export default function FormLogin() {
  const {i18n} = useTranslation();
  const navigate = useNavigate();
  const {setToken} = Store();
  const {enqueueSnackbar} = useSnackbar();
  const [loading, setLoading] = useState(false);
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async (values) => {
      setLoading(true);
      await axios
        .post(`/admins/`, values)
        .then((res) => {
          setToken(res.data.token);
          localStorage.setItem("token", JSON.stringify(res.data.token));
          enqueueSnackbar(`${res.data.message}`, {variant: "success"});
          setLoading(false);
          navigate("/admins/dashboard");
        })
        .catch((err) => {
          enqueueSnackbar(`${err.response.data}`, {variant: "error"});
          setLoading(false);
          console.log(err);
        });
    }
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <Card
          elevation={5}
          sx={{borderRadius: "30px", padding: "20px"}}
          className="card_bgc"
        >
          <List>
            {Object.keys(formik.initialValues).map((ele, index) => (
              <ListItem key={index}>
                <TextField
                  name={ele}
                  label={ele}
                  onChange={formik.handleChange}
                  error={formik.touched[ele] && Boolean(formik.errors[ele])}
                  helperText={formik.touched[ele] && formik.errors[ele]}
                  inputProps={{type: ele === "email" ? "email" : "password"}}
                  fullWidth
                  sx={{textTransform: "capitalize"}}
                  autoComplete={
                    ele === "password" ? "current-email" : "current-password"
                  }
                />
              </ListItem>
            ))}
            <ListItem>
              <LoadingButton
                loading={loading}
                startIcon={<Login />}
                fullWidth
                variant="contained"
                type="submit"
                dir="ltr"
              >
                Log in
              </LoadingButton>
            </ListItem>
            <ListItem>
              <Typography
                component={"span"}
                textTransform={"capitalize"}
                variant="caption"
              >
                *{i18n.t("g.notesFormLogin")}
              </Typography>
            </ListItem>
          </List>
        </Card>
      </form>
    </Box>
  );
}
