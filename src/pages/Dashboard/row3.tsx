import {  Paper, Stack, Typography, useTheme } from "@mui/material"


import Pie from "../pieChart/Pie"
import Bar from "../barChart/bar"

import Geo from "../geography/Geo"

const Row3 = () => {
 const theme = useTheme()
 return (
  <Stack    direction={"row"} gap={1} flexWrap={"wrap"} sx={{ mt: 1 }}>
   <Paper sx={{ height:"350px", flexGrow: 1, minWidth: "400px", width: "28%" }}>
    <Typography color={theme.palette.success.light} sx={{ padding: "30px 30px 0 30px" }} variant="h6" fontWeight="600">
     Campaign
    </Typography>
    <Pie isDashboard={true} />

   </Paper>
   <Paper sx={{height:"350px", flexGrow: 1, width: "33%%" }}>
    <Typography color={theme.palette.success.light} variant="h6" fontWeight="600" sx={{ padding: "30px 30px 0 30px" }}>
     Sales Quantity
    </Typography>
    <Bar isDashboard={true} />
   </Paper>
   <Paper sx={{ flexGrow: 1,height:"350px",minWidth: "400px" ,}}>
    <Geo isDashboard={true}/>  
   </Paper>
  </Stack>
 )
}

export default Row3
