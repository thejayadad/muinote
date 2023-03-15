import React from 'react'
import Notes from '../notes/Notes'
import { Stack, Box } from "@mui/material";




const NoteList = () => {
  return (
    <Stack direction="row" flexWrap="wrap" alignItems="start" gap={2}>
     <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
    </Stack>
  )
}

export default NoteList