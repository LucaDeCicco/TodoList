import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

export default function App() {
    return (
        <>
            <Routes>
                <Route index element={<MainPage />} />
            </Routes>
        </>
    );
}
