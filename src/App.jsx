import { Routes, Route } from "react-router-dom";
import Cadastro from './views/Cadastro'
import Login from "./views/Login";

function App() {
  return (
   <Routes>
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
