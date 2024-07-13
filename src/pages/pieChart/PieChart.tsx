
import { Box } from "@mui/material"
import Textheader from "../../components/Textheader"
import Pie from "./Pie"

const PieChart = ({ isDashboard = false }) => {



 return (
  <Box height={isDashboard ? "350px" : "75vh"} >
        <Textheader isDashboard={true} title={"pie Chart"} text={"Data of the average individual income"} />

   <Pie />
  </Box>
 )
}

export default PieChart
