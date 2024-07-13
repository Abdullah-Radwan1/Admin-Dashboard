
import Row1 from "./row1"
import Row2 from "./row2"
import Row3 from "./row3"
import Textheader from "../../components/Textheader"
import { Box, Button, Stack } from "@mui/material"
import { DownloadOutlined } from "@mui/icons-material"
const Dashboard = () => {
 return (
  <div>
   <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"}>
    <Textheader isDashboard={true} title={"DASHBOARD"} text={"Welcome to your dashboard"} />
    <Box sx={{ textAlign: "right", mb: 1.3 }}>
     <Button sx={{ fontSize:"16px", padding: "4px 6px", textTransform: "capitalize" }} variant="contained" color="primary">
      <DownloadOutlined />
      Download Reports
     </Button>
    </Box>
   </Stack>
   <Row1 />
   <Row2 />
   <Row3 />
  </div>
 )
}

export default Dashboard
