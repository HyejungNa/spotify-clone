import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./SearchPage/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />}></Route>
        <Route path="search" element={<SearchPage />}></Route>
        {/* <Route
          path="search/:keyword"
          element={<SearchWithKeywordPage />}
        ></Route>
        <Route path="playlist/:id" element={<PlaylistDetailPage />}></Route> */}
        {/* mobile version playlist page */}
        {/* <Route path="playlist" element={<PlaylistPage />}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
