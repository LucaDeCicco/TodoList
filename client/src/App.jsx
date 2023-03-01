import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Test from "./pages/Test";

const App = () => (
  <>
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="test" element={<Test />} />
    </Routes>
  </>
);

export default App;
