import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material"

import Line from "../lineChart/Line"
import { Transactions } from "./data"
import { DownloadOutlined } from "@mui/icons-material"
const Row2 = () => {
 const theme = useTheme()
 return (
  <Stack direction={"row"} sx={{ mt: 1 }} gap={1} flexWrap={"wrap"}>
   <Paper sx={{ flexGrow: 1, minWidth: "400px" }}>
    <Stack alignItems={"center"} direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
     <Box>
      <Typography color={theme.palette.success.light} mb={1} mt={2} ml={4} variant="h6" fontWeight={"bold"}>
       Revenue Generated
      </Typography>
      <Typography variant="body2" ml={4}>
       $59,342.32
      </Typography>
     </Box>

     <Box>
      <IconButton sx={{ mr: 3 }}>
       <DownloadOutlined />
      </IconButton>
     </Box>
    </Stack>

    <Line isDashboard={true} />
   </Paper>
   <Paper
    sx={{
     overflow: "auto",
     borderRadius: "4px",
     maxHeight: "370px",
     flexGrow: 1,
     minWidth: "500px",
    }}
   >
    <Paper>
     <Typography color={theme.palette.success.light} fontWeight={"bold"} p={1.2} variant="h6">
      Recent Transactions
     </Typography>
    </Paper>

    {Transactions.map((item) => {
     return (
      <Paper
       key={item.txId}
       sx={{
        mt: 0.4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
       }}
      >
       <Box p={1.2}>
        <Typography variant="body1">{item.txId}</Typography>
        <Typography variant="body2">{item.user} </Typography>
       </Box>
       <Typography variant="body1">{item.date} </Typography>

       <Typography borderRadius={1.4} p={1} bgcolor={theme.palette.error.main} color={theme.palette.getContrastText(theme.palette.error.main)} variant="body2" width={"70px"}>
        ${item.cost}
       </Typography>
      </Paper>
     )
    })}
   </Paper>
  </Stack>
 )
}

export default Row2
