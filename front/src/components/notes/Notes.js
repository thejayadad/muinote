import React from 'react'
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";



const Notes = () => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
        <Link to="/">
        <CardMedia image="https://images.pexels.com/photos/1707819/pexels-photo-1707819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic"
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}
      />
      </Link>
          <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
        <Link to="/" >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
                Note Title
        </Typography>
        </Link>
        <Link to="/">
          <Typography variant="subtitle2" color="gray">
                Title
        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
        </Link>
    </CardContent>
</Card>
  )
}

export default Notes