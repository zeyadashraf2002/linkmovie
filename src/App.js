import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LangContext } from "./context/LangContext";
import Details from './Pages/Details';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Favorites from './Pages/Favorites';
import Nav from './Components/NavbarComponent';
import NotFound from './Pages/NotFoundPage';
import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';

export default function App() {
  const [contextLang, setContextLang] = React.useState("en");

  return (
    <BrowserRouter>
      <LangContext.Provider value={{ contextLang, setContextLang }}>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fav" element={<Favorites />} />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} /> {/* fallback */}
        </Routes>
      </LangContext.Provider>
    </BrowserRouter>
  );
}
