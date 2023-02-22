import React from "react";
import Nav from "./Component/Nav";
import Homepage from "./Component/Homepage";
import Catalog from "./Component/Catalog";
import Designs from "./Component/Designs";
import Footer from "./Component/Footer";
import { useState } from "react";
import { Route, Routes } from "react-router";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  const clickMenu = (e) => {
    e.preventDefault();
    setShowSideBar(!showSideBar);
  };

  return (
    <div>
      <Nav clickMenu={clickMenu} showSideBar={showSideBar} />
      <Routes>
        <Route
          path="/"
          element={<Homepage clickMenu={clickMenu} showSideBar={showSideBar} />}
        />
        <Route
          path="/catalogs"
          element={<Catalog clickMenu={clickMenu} showSideBar={showSideBar} />}
        />
        <Route
          path="/designs"
          element={<Designs clickMenu={clickMenu} showSideBar={showSideBar} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
