import { NotFound } from 'components/404';
import { About } from 'components/about';
import { Details } from 'components/details';
import { AppHeader } from 'components/header';
import { Home } from 'components/home';
import { Join } from 'components/join';
import { AppProvider } from 'context';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <AppHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="join" element={<Join />} />
            <Route path="details" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </AppProvider>
  );
}

export default App;
