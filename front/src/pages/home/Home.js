import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";



const Home = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        side
    </Box>
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    main feed

    </Box>
    </Stack>
  )
}

export default Home