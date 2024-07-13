
import Bar from "./bar"
import Textheader from "../../components/Textheader"

const BarChart = () => {
 return (
  <>
   {" "}
   <Textheader isDashboard={true} title={"Bar Data"} text={"data of production of energy resources in different countries."} />
   <Bar />
  </>
 )
}

export default BarChart
