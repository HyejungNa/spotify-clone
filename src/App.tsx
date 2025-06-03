import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchWithKeywordPage = React.lazy(
  () => import("./pages/SearchWithKeywordPage/SearchWithKeywordPage")
);
const PlaylistDetailPage = React.lazy(
  () => import("./pages/PlaylistDetailPage/PlaylistDetailPage")
);
const PlaylistPage = React.lazy(
  () => import("./pages/PlaylistPage/PlaylistPage")
);

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="search" element={<SearchPage />}></Route>
          <Route
            path="search/:keyword"
            element={<SearchWithKeywordPage />}
          ></Route>
          <Route path="playlist/:id" element={<PlaylistDetailPage />}></Route>
          <Route path="playlist" element={<PlaylistPage />}></Route>
          <Route path="*" element={<div>Page Not Found</div>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
