import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Principal } from "./components/Principal/Principal.jsx";
import { Somos } from "./components/Somos/Somos.jsx";
import { Productos } from "./components/Productos/Productos.jsx";
import { Proteinas } from "./components/Proteinas/Proteinas.jsx";
import { Contacto } from "./components/Contacto/Contacto.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/ProyectoAker/' element={<Principal />} />
          <Route path='/ProyectoAker/somos' element={<Somos />} />
          <Route path='/ProyectoAker/productos' element={<Productos />} />
          <Route path='/ProyectoAker/proteinas' element={<Proteinas />} />
          <Route path='/ProyectoAker/Contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
