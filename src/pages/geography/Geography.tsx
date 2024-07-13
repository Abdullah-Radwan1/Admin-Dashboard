import { Box } from "@mui/material"


import Textheader from "../../components/Textheader"
import Geo from "./Geo"

const Geography = ({ isDashboard = false }) => {


 return (
  <>
   <Textheader isDashboard={true} title={"World map"} text={""} />
   <Box height={isDashboard ? "300px" : "75vh"} width={isDashboard ? "100%"  : "80%"} sx={{ mx: "auto", border: isDashboard ? 0 : "1px solid white" }}>
<Geo/>
   </Box>
  </>
 )
}

export default Geography
