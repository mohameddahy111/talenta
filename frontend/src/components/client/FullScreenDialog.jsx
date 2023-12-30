import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import {
  AppBar,
  Box,
  DialogContent,
  IconButton,
  List,
  ListItemButton,
  Menu,
  Typography
} from "@mui/material";
import {Close} from "@mui/icons-material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);
  const {i18n} = useTranslation();
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const list = [
    {title_en: "Home", title_ar: "الرئسية", path: "/"},
    {title_en: "Our Services", title_ar: "خدماتنا", path: "/our_services"},
    {title_en: "About us", title_ar: "اعرف عننا", path: "/abut"},
    {title_en: "Our Workes", title_ar: "اعمالنا", path: "/our_works"},
    {title_en: "Our Clients.", title_ar: "عملائنا", path: "/our_clients."},
    {title_en: "Contact Us", title_ar: "اتصل بينا", path: "/contact_us"}
  ];

  return (
    <React.Fragment>
      <Button
        onClick={handleClickOpen}
        sx={{border: ".5px solid #000", borderRadius: "30px", p: 0}}
      >
        <MoreHorizOutlinedIcon sx={{color: "#fff"}} />
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        
        <AppBar
          sx={{bgcolor: "transparent", color: "#000"}}
          elevation={0}
          position="static"
        >
          <Box m={2}>
            <IconButton onClick={handleClose}>
              <Close />
            </IconButton>
          </Box>
        </AppBar>
        <DialogContent >
        <Box
          height={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <List>
            {list.map((ele, index) => (
              <ListItemButton
                key={index}
                sx={{my: "20px"}}
                onClick={() => {
                  navigate(`${ele.path}`);handleClose()
                }}
              >
                <Typography fontWeight={700} variant="h5" component={"h5"}>
                  {i18n.language === "enUS" ? ele.title_en : ele.title_ar}
                </Typography>
              </ListItemButton>
            ))}
          </List>
        </Box>

        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
