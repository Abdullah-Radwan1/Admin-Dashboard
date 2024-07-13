import { Box } from "@mui/material"

import Line from "./Line"
import Textheader from "../../components/Textheader"

const LineChart = ({ isDashboard = false }) => {
 return (
  <Box height={isDashboard ? "300px" : "75vh"}>
        <Textheader isDashboard={true} title={"Line chart"} text={"data of production of energy resources in different countries."} />

   <Line />
  </Box>
 )
}

export default LineChart
