import React from "react";
import { rows } from "./teamdata";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import {
 AdminPanelSettingsOutlined,
 LockOpenOutlined,
 SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
 const columns = [
  { field: "id", headerName: "id", width: 150, flex: 1, align: "center", headerAlign: "center" },
  {
   field: "name",
   headerName: "name",
   width: 150,
   flex: 1,
   align: "center",
   headerAlign: "center",
  },
  {
   field: "email",
   headerName: "email",
   width: 150,
   flex: 1,
   align: "center",
   headerAlign: "center",
  },
  { field: "age", headerName: "age", width: 150, flex: 1, align: "center", headerAlign: "center" },
  {
   field: "phone",
   headerName: "phone",
   width: 150,
   flex: 1,
   align: "center",
   headerAlign: "center",
  },
  {
   field: "access",
   headerName: "access",
   width: 10,
   flex: 1,
   align: "center",
   headerAlign: "center",
   renderCell: ({ row: { access } }) => {
    return (
     <Box
      sx={{
        width:"100px",
       backgroundColor:
        access == "Admin"
         ? theme.palette.secondary.dark
         : access == "Manager"
         ? theme.palette.info.main
         : "#3da58a",
         display:"flex",
         justifyContent:"space-evenly",
         borderRadius:"5px",
         p:"5px",
         marginTop:"8px",
         mx:"auto" 
       
      }}
     >
      {access=="Admin" ? <AdminPanelSettingsOutlined sx={{color:"white"}}/> : access=="Manager" ?<SecurityOutlined sx={{color:"white"}}/> : <LockOpenOutlined sx={{color:"white"}}/>  }
      <Typography color={"white"} sx={{ fontSize: "15px" }}>{access}</Typography>
     </Box>
    );
   },
  },
 ];
 const theme = useTheme();
 return (
  <div style={{ height: 600, width: "100%",}}>
   <DataGrid rows={rows} columns={columns}sx={{fontSize:"1rem" }} />
  </div>
 );
};

export default Team;
