import React from "react"
import { Box, Typography, useTheme } from "@mui/material"

interface textHeaderTypes {
 title: string
 text: string
 isDashboard: boolean
}
const Textheader: React.FC<textHeaderTypes> = ({
 title,
 text,
 isDashboard = false,
}) => {
 const theme = useTheme()
 return (
  <Box mb={isDashboard ? 2 : 4}>
   <Typography
    sx={{
     color: theme.palette.info.light,
     fontWeight: "bold",
    }}
    fontSize={30}
   >
    {title}
   </Typography>
   <Typography variant="body1">{text}</Typography>
  </Box>
 )
}

export default Textheader
