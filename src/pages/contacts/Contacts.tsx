import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./data"
import Textheader from "../../components/Textheader"

const Contacts = () => {
 return (
  <div style={{ height: 600, width: "100%" }}>
   <Textheader isDashboard={true} title={"Contact"} text={"our company contacts"} />
   <DataGrid
    rows={rows}
    columns={columns}
    slots={{
     toolbar: GridToolbar,
    }}
   />
  </div>
 )
}

export default Contacts
