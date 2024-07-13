
import { Box, styled } from "@mui/material"
import { Outlet } from "react-router-dom"

const Content = () => {
 const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
 }))

 return (
  <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
   <DrawerHeader />

   <Outlet />
  </Box>
 )
}

export default Content
