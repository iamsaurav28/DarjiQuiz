import * as React from "react";
// import { Header } from "./Components/Header";
import Question from "./Components/Question";
import { Home } from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Rules from "./Components/Rules";

export default function App() {
  return (
    <div className="container mx-auto px-4 App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizId" element={<Question />} />
        <Route path="rules" element={<Rules />} />
      </Routes>
    </div>
  );
}
