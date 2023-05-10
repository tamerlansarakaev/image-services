import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './App.css';
import Home from './pages/Home/Home';

function App() {
  const [links] = React.useState([{ title: 'Home', href: '/' }]);
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header links={links} />
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

