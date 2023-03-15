import React from 'react'
import { Stack } from "@mui/material";
import "./category.css"


const Category = () => {
  return (
    <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}>
        <button
        className='cat-btn'
        >
        Sports 
        </button>
        <button
        className='cat-btn'
        >
            Sports
        </button>



    </Stack>
  )
}

export default Category