import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';

// Pages
import Home from './pages/Home/Home';
import Compressored from './pages/Compressored/Compressored';
import NotFound from './pages/404/404';

// Styles
import './App.css';

function App() {
  const [links] = React.useState([
    { title: 'Главная', href: '/image-compressor/' },
  ]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header links={links} />
          <Routes>
            <Route element={<Home />} path="/image-compressor" />
            <Route element={<Compressored />} path={`image-comressor/result`} />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
