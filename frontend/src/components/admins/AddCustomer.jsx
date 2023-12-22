import React, {useState} from "react";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import axios from "axios";
import {Store} from "../../context/DataStore";
import {useSnackbar} from "notistack";

export default function AddCustomer() {
  const {enqueueSnackbar} = useSnackbar();
  const [photo, setPhoto] = useState("");
  const [nameAR, setNameAR] = useState("");
  const [nameEn, setNameEn] = useState("");
  const { axiosToken } = Store();
  const formData = new FormData()

  const addCustomer = async () => {
    if (nameEn === "" ) {
      enqueueSnackbar(`English name  is required `, {variant: "error"});
      return;
    }
    if (nameAR === "" ) {
      enqueueSnackbar(`Arbic name  is required `, {variant: "error"});
      return;
    }
    if (photo === "" ) {
      enqueueSnackbar(` Photo  is required `, {variant: "error"});
      return;
    }
    formData.append("name_en" ,nameEn)
    formData.append("name_ar" ,nameAR)
    formData.append("logo_customer",  photo[0])
    await axios
      .post("/customer",formData, axiosToken)
      .then((res) => {
        enqueueSnackbar(`${res.data}`, {variant: "success"});
      })
      .catch((err) => {
        enqueueSnackbar(`${err.response.data}`, {variant: "error"});
      });
  };
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item md={4} xs={12}>
          <Typography variant="caption">Add Customer logo </Typography>
          {photo && (
            <img
              src={photo ? URL.createObjectURL(photo[0]) : ""}
              alt="img-logo"
              width={"100%"}
            />
          )}
          <TextField
            type="file"
            fullWidth
            onChange={(e) => {
              setPhoto(e.target.files);
            }}
          />
        </Grid>
        <Grid item md={8} xs={12}>
          <Box pt={2.5} display={ 'flex '} gap={2}>
            <TextField
              required
              name="name"
              label="Customer English Name"
              onChange={(e) => {
                setNameEn(e.target.value);
              }}
            />
            <TextField
              required
              name="name"
              label="Customer Arbic Name"
              onChange={(e) => {
                setNameAR(e.target.value);
              }}
            />
          </Box>
          <Button sx={{mt: "20px"}} variant="contained" onClick={addCustomer}>
            Add Customer
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
