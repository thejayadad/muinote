import React from 'react'
import { Box, Stack, Typography, Card, CardMedia, CardContent } from "@mui/material";
import Category from "../../components/category/Category";
import NoteList from "../../components/noteList/NoteList";
import Notes from '../../components/notes/Notes';
import { Link } from "react-router-dom";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";



const Detail = () => {
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
          <Card sx={{ maxWidth: 545, margin: "auto", boxShadow: "none", borderRadius: 0 }}>
          <CardMedia
        sx={{ objectFit: "cover", height: 400, }}
        image="https://images.pexels.com/photos/858466/pexels-photo-858466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Note Title"
      />
           <CardContent sx={{ backgroundColor: "#1E1E1E", height: '100%' }}>

        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                Note Title
        </Typography>
        <Typography sx={{ marginTop: 1}} variant="body2" color="text.secondary" >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography sx={{ marginTop: 1}} variant="subtitle2" color="gray">
                Title
        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>

    </CardContent>

    </Card>

    </Box>

    </Box>
    </Stack>
  )
}

export default Detail