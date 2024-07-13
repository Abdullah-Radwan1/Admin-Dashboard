import React from "react";
import {
 Avatar,
 Divider,
 IconButton,
 List,
 ListItem,
 ListItemButton,
 ListItemIcon,
 ListItemText,
 Stack,
 styled,
 Theme,
 Tooltip,
 Typography,
 useTheme,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject } from "@emotion/react";
import {
 BarChartOutlined,
 CalendarTodayOutlined,
 ContactMail,
 HelpOutlineOutlined,
 HomeOutlined,
 MapOutlined,
 PeopleOutline,
 PersonOutlined,
 PieChartOutlineOutlined,
 ReceiptOutlined,
 TimelineOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
 ({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
   ...openedMixin(theme),
   "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
   ...closedMixin(theme),
   "& .MuiDrawer-paper": closedMixin(theme),
  }),
 }),
);
const DrawerHeader = styled("div")(({ theme }) => ({
 display: "flex",
 alignItems: "center",
 justifyContent: "flex-end",
 padding: theme.spacing(0, 1),
 // necessary for content to be below app bar
 ...theme.mixins.toolbar,
}));
const openedMixin = (theme: Theme): CSSObject => ({
 width: drawerWidth,
 transition: theme.transitions.create("width", {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.enteringScreen,
 }),
 overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
 transition: theme.transitions.create("width", {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 overflowX: "hidden",
 width: `calc(${theme.spacing(7)} + 1px)`,
 [theme.breakpoints.up("sm")]: {
  width: `calc(${theme.spacing(8)} + 1px)`,
 },
});

interface HeaderProps {
 open: boolean;
 handleDrawerClose: () => void;
}

const arr1 = [
 { text: "Dashboard", icon: <HomeOutlined />, path: "/" },
 { text: "manage team", icon: <PeopleOutline />, path: "/team" },
 { text: "contact information", icon: <ContactMail />, path: "/contact" },
 { text: "invoices balance", icon: <ReceiptOutlined />, path: "/invoices" },
];
const arr2 = [
 { text: "Profile Form", icon: <PersonOutlined />, path: "/form" },
 { text: "Calendar", icon: <CalendarTodayOutlined />, path: "/calendar" },
 {
  text: "FAQ Page",
  icon: <HelpOutlineOutlined />,
  path: "/faq",
 },
];
const arr3 = [
 { text: "Bar Chart", icon: <BarChartOutlined />, path: "/bar" },
 { text: "Pie Chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
 { text: "Line Chart", icon: <TimelineOutlined />, path: "/line" },
 { text: "Geography Chart", icon: <MapOutlined />, path: "/geography" },
];
const SideBar: React.FC<HeaderProps> = ({ open, handleDrawerClose }) => {
 const navigate = useNavigate();
 const theme = useTheme();
 const location = useLocation()
 return (
  <Drawer variant="permanent" open={open}>
   <DrawerHeader>
    <IconButton onClick={handleDrawerClose}>
     {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
   </DrawerHeader>
   <Stack justifyContent={"center"} alignItems={"center"} sx={{ mb: open ? 4 : 0 }}>
    <Avatar
    src="../../public/166556381_786865882260024_7965935742491160141_n copy.jpg"
     sx={
      {
      mx: "auto",
      width: open ? 88 : 50,
      height: open ? 88 : 50,
      my: 1,
      border: "2px solid grey",
      transition: "0.25s",
      
     }
}
    />
    <Typography sx={{ fontSize: open ? "20px" : 0, transition: "0.25s" }}>Abdullah</Typography>
    <Typography
     sx={{
      fontSize: open ? 16 : 0,
      transition: "0.25s",
      color: theme.palette.info.main,
     }}
     color={"primary"}
    >
     admin
    </Typography>
   </Stack>
   <Divider />
   <List>
    {arr1.map((item) => (
     <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
        <Tooltip title={open ? null : item.text} placement="right" >
 
        <ListItemButton
       onClick={() => navigate(`${item.path}`)}
       sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
        backgroundColor: location.pathname === item.path ? theme.palette.mode ==="dark" ? grey[800] : grey[300]  : null
       }}
      >
       <ListItemIcon
        sx={{
         minWidth: 0,
         mr: open ? 3 : "auto",
         justifyContent: "center",
        }}
       >
        {item.icon}
       </ListItemIcon>

       <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>

</Tooltip>

     </ListItem>
    ))}
   </List>
   <Divider />
   <List>
    {arr2.map((item) => (
     <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
        <Tooltip title={open ? null : item.text} placement="right" >
 
        <ListItemButton
       onClick={() => navigate(`${item.path}`)}
       sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
        backgroundColor: location.pathname === item.path ? theme.palette.mode ==="dark" ? grey[800] : grey[300]  : null
       }}
      >
       <ListItemIcon
        sx={{
         minWidth: 0,
         mr: open ? 3 : "auto",
         justifyContent: "center",
        }}
       >
        {item.icon}
       </ListItemIcon>

       <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>

</Tooltip>

     </ListItem>
    ))}
   </List>
   <Divider />
   <List>
    {arr3.map((item) => (
     <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
        <Tooltip title={open ? null : item.text} placement="right" >
 
        <ListItemButton
       onClick={() => navigate(`${item.path}`)}
       sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
        backgroundColor: location.pathname === item.path ? theme.palette.mode ==="dark" ? grey[800] : grey[300]  : null
       }}
      >
       <ListItemIcon
        sx={{
         minWidth: 0,
         mr: open ? 3 : "auto",
         justifyContent: "center",
        }}
       >
        {item.icon}
       </ListItemIcon>

       <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>

</Tooltip>

     </ListItem>
    ))}
   </List>
  </Drawer>
 );
};

export default SideBar;
