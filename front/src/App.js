

import {Box} from "@mui/material"
import Navbar from "./components/navbar/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import UpdateNote from "./pages/updateNote/UpdateNote";

function App() {
  return (
    <Box sx={{ backgroundColor: "#000"}}>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/updatenote/:id" element={<UpdateNote />} />

    </Routes>
      </Box>
  );
}

export default App;
