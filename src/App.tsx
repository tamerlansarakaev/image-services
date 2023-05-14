import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';

import './App.css';
import Home from './pages/Home/Home';
import { useAppSelector } from './redux/config';
import Compressored from './pages/Compressored/Compressored';

function App() {
  const globalState = useAppSelector(
    (state) => state.rootReducer.globalReducer
  );
  const [links] = React.useState([{ title: 'Home', href: '/' }]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header links={links} />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Compressored />} path={`result`} />) : ( ''
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

