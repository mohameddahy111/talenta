import React from "react";
import {Box, Grid, List, ListItemButton} from "@mui/material";
import {useTranslation} from "react-i18next";
import {Outlet, useNavigate} from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const {i18n} = useTranslation();

  return (
    <Box p={2}>
      <Grid container spacing={1}>
        <Grid item md={2} xs={12}>
          <List>
            <ListItemButton
              onClick={() => {
                navigate("/admins/dashboard/add_admin");
              }}
            >
              {i18n.t("dashboard.sideMenu.AddAdmin")}
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                navigate("/admins/dashboard/Add_customer");
              }}
            >
              {i18n.t("dashboard.sideMenu.AddCustomer")}
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                navigate("/admins/dashboard/Add_project");
              }}
            >
              {i18n.t("dashboard.sideMenu.AddProject")}
            </ListItemButton>
          </List>
        </Grid>
        <Grid item md={10} xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
