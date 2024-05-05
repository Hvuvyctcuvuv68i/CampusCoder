import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Mainpage from "./Components/Mainpage";
import Secondpage from "./Components/Secondpage";
import Editor from "./Components/Editor";
import Description1 from "./Components/Description1";
import Description2 from "./Components/Description2";
import Description4 from "./Components/Description4";
import Description5 from "./Components/Description5";

import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/mainpage" element={<Mainpage />} />
          <Route path="/Secondpage" element={<Secondpage />} />
          <Route path="/editor" element={<Editor />}></Route>
          <Route path="/description1" element={<Description1 />}></Route>
          <Route path="/description2" element={<Description2 />}></Route>
          <Route path="/description4" element={<Description4 />}></Route>
          <Route path="/description5" element={<Description5 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
