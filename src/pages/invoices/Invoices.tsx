import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";

const Invoices = () => {
 return (
  <div style={{ height: 600, width: "100%" }}>
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