import React from "react";

import { Box, useTheme } from "@mui/material";
import Bar from "./bar";


const BarChart = () => {

  return (
    <Box style={{ height: "75vh"} }>

      <Bar />
    </Box>
  );
};

export default BarChart;