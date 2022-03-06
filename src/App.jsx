import "./App.css";
import { Routes, Route, useNavigation } from "react-router-dom";

import Login from "./screens/Login";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
