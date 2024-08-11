import React from "react";
import {
 alpha,
 Box,
 IconButton,
 InputBase,
 Stack,
 styled,
 useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EuroOutlinedIcon from "@mui/icons-material/EuroOutlined";

type Mode = "light" | "dark";
interface AppBarProps extends MuiAppBarProps {
 open?: boolean;
}
interface HeaderProps {
 open: boolean;
 handleDrawerOpen: () => void;
 setMode: (mode: Mode) => void;
}
const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
 shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
 zIndex: theme.zIndex.drawer + 1,
 transition: theme.transitions.create(["width", "margin"], {
  easing: theme.transitions.easing.sharp,
  duration: theme.transitions.duration.leavingScreen,
 }),
 ...(open && {
  marginLeft: drawerWidth,
  width: `calc(100% - ${drawerWidth}px)`,
  transition: theme.transitions.create(["width", "margin"], {
   easing: theme.transitions.easing.sharp,
   duration: theme.transitions.duration.enteringScreen,
  }),
 }),
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
 padding: theme.spacing(0, 2),
 height: "100%",
 position: "absolute",
 pointerEvents: "none",
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
}));
const Search = styled("div")(({ theme }) => ({
 position: "relative",
 borderRadius: theme.shape.borderRadius,
 backgroundColor: alpha(theme.palette.common.white, 0.15),
 "&:hover": {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
 },
 marginLeft: 0,
 width: "100%",
 [theme.breakpoints.up("sm")]: {
  marginLeft: theme.spacing(1),
  width: "auto",
 },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color: "inherit",
 width: "100%",
 "& .MuiInputBase-input": {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create("width"),
  [theme.breakpoints.up("sm")]: {
   width: "12ch",
   "&:focus": {
    width: "20ch",
   },
  },
 },
}));

const Header: React.FC<HeaderProps> = ({ setMode, open, handleDrawerOpen }) => {
 const theme = useTheme();

 return (
  <div>
   ss
   <AppBar position="fixed" open={open}>
    <Toolbar>
     <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={{
       marginRight: 5,
       ...(open && { display: "none" }),
      }}
     >
      <MenuIcon />
     </IconButton>
     <Search>
      <SearchIconWrapper>
       <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
       placeholder="Search…"
       inputProps={{ "aria-label": "search" }}
      />
     </Search>
     <Box flexGrow={1} />
     <Stack direction={"row"}>
      {theme.palette.mode === "light" ? (
       <IconButton
        onClick={() => {
         setMode("dark");
         localStorage.setItem("currentMode", "light");
        }}
       >
        <WbSunnyIcon color="inherit" />
       </IconButton>
      ) : (
       <IconButton
        onClick={() => {
         setMode("light");
         localStorage.setItem("currentMode", "dark");
        }}
       >
        <DarkModeOutlinedIcon color="inherit" />
       </IconButton>
      )}

      <IconButton>
       <PersonOutlinedIcon color="inherit" />
      </IconButton>
      <IconButton>
       <EuroOutlinedIcon color="inherit" />
      </IconButton>
      <IconButton>
       <NotificationsNoneOutlinedIcon color="inherit" />
      </IconButton>
     </Stack>
    </Toolbar>
   </AppBar>
  </div>
 );
};

export default Header;
