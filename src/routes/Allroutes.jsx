import React from "react";
import { Route, Routes } from "react-router-dom";
import Postpage from "../Pages/Postpage";
import Retrivepage from "../Pages/Retrievepage";

function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Postpage />} />
      <Route path="/post" element={<Postpage />} />
      <Route path="/retrive" element={<Retrivepage />} />
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>
  );
}

export default Allroutes;
