
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Textheader from "../../components/Textheader";

const Invoices = () => {
 return (
  <div style={{ height: 600, width: "100%" }}>
       <Textheader isDashboard={true} title={"Invoices"} text={""} />

   <DataGrid
      checkboxSelection
    rows={rows}
    columns={columns}
    slots={{
     toolbar: GridToolbar,
    }}
   />
  </div>
 );
};

export default Invoices;