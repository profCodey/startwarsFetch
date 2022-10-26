
import React, { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/home/home";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/:id" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;