import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Swtich는 Route를 찾는 역할
import Home from "./routes/Home";
import Detail from "./routes/Detail";

//라우터 렌더링
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
