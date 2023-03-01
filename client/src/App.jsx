import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => (
  <>
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  </>
);

export default App;
