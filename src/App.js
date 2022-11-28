import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { HiOutlineViewGrid } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import "./App.css";
import Login from "./component/Login";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import ListJudul from "./component/listjudul";
import Detail from "./component/Detail"
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
function App() {
  return (
    <BrowserRouter history={history}>
      <header>
        <p id="titleGroup">MangaList</p>
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/listjudul" element={<ListJudul />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie/:id" element={<Detail/>} />
      </Routes>
      <footer>
        <NavLink to="/login" className="iconWrapper">
          <BiLogIn className="icon" />
          Login
        </NavLink>
        <NavLink to="/movie" className="iconWrapper">
          <HiHome className="icon" />
          List Manga
        </NavLink>
        <NavLink to="/listjudul" className="iconWrapper">
          <HiOutlineViewGrid className="icon" />
          List Judul
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  );
}

export default App;
