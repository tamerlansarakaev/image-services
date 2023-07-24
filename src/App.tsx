import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header/Header";

// Pages
import Compressored from "./pages/Compressored/Compressored";
import NotFound from "./pages/404/404";
import CompressorPage from "./pages/CompressorPage/CompressorPage";
import Home from "./pages/Home/Home";
import ImageConvertor from "./pages/ImageConvertor/ImageConvertor";

// Styles
import "./App.css";

function App() {
  const [links] = React.useState([{ title: "Главная", href: "/" }]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header links={links} />
          <Routes>
            <Route element={<CompressorPage />} path="/compressor" />
            <Route element={<Compressored />} path={`/result`} />
            <Route element={<Home />} path={`/`} />
            <Route element={<NotFound />} path="*" />
            <Route element={<ImageConvertor />} path="/conventer" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
