import { BrowserRouter, Routes, Route } from "react-router";
// import React from "react";
import { createRoot } from "react-dom/client";
import SubmitComplaintPage from "./pages/SubmitComplaintPage";
import Question from "./pages/Question";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/api/terorist" element={<SubmitComplaintPage />} />
      <Route path="/api/question" element={<Question />} />
    </Routes>
  </BrowserRouter>,
);
