import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import {Avatar, Box} from "@mui/material";
import axios from "axios";
import {Store} from "../../context/DataStore";
import {useSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";

export default function ProfileAdminMenu({data}) {
  const navigate = useNavigate();
  const {enqueueSnackbar, closeSnackbar} = useSnackbar();
  const {basicUrl, token, setAdminIfo, setToken} = Store();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    await axios
      .patch(
        `${basicUrl}/admins`,
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      )
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem("token");
          localStorage.removeItem("admin_info");
          setAdminIfo(null);
          setToken(null);
          enqueueSnackbar(`${res.data}`, {variant: "success"});
          navigate("/admins/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={ 'center'}>
      <Avatar src={data.img.src } />
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{color: "#fff"}}
      >
        {data.name}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            logout(handleClose);
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
