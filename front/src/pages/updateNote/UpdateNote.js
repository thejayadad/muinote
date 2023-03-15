import React from 'react'
import { Box, Stack, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Category from "../../components/category/Category";
import NoteList from "../../components/noteList/NoteList";
import Notes from '../../components/notes/Notes';
import { Link } from "react-router-dom";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";


const UpdateNote = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Category />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Thejayadad
        </Typography>
    </Box>
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
    <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
    <span style={{ color: "#FC1503" }}>Notes</span>
    </Typography>
    <Box
    sx={{
      maxWidth: 600,
      margin: "auto"
    }}
    >



        </Box>

    </Box>
    </Stack>
  )
}

export default UpdateNote