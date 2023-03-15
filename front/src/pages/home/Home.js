import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Category from "../../components/category/Category";
import Notes from "../../components/notes/Notes";

const Home = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Category />
    </Box>
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
    <span style={{ color: "#FC1503" }}>Notes</span>
    </Typography>
    <Notes />
    </Box>
    </Stack>
  )
}

export default Home