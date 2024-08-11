import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./Theme";

type Mode = "light" | "dark";
const savedMode = localStorage.getItem("currentMode") as Mode | null;

export default function App() {
 const [open, setOpen] = useState(false);
 const [mode, setMode] = useState<Mode>(savedMode ? savedMode : "dark");

 useEffect(() => {
  localStorage.setItem("currentMode", mode);
 }, [mode]);

 const handleDrawerOpen = () => {
  setOpen(true);
 };

 const handleDrawerClose = () => {
  setOpen(false);
 };

 return (
  <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
   <Box sx={{ display: "flex" }}>
    <CssBaseline />
    <Header setMode={setMode} open={open} handleDrawerOpen={handleDrawerOpen} />
    <SideBar open={open} handleDrawerClose={handleDrawerClose} />
    <Content />
   </Box>
  </ThemeProvider>
 );
}
