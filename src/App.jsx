import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import Dashboard from "./Dashboard";
import Transacciones from "./Transacciones";
import TareasHabitos from "./TareasHabitos";
import logo from "./img/color-bw-03.svg";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./App.css";

function App() {
  const WIP_MESSAGE = "Página aún en construcción...";
  const ERROR_MESSAGE = "¡UPS! Esa página no existe...";

  return (
    <>
      <BrowserRouter>
        <header>
          <nav className="navbar">
            <a href="/" className="logo-link">
              <img src={logo} alt="Logo" className="logo" />
            </a>
            <ul className="nav-links">
            <li>
                <a href="/dashboard">Inicio</a>
              </li>
              <li>
                <a href="/transacciones">Transacciones</a>
              </li>
              <li>
                <a href="/tareas-habitos">Tareas y habitos</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            {/* Página principal cuando el usuario está logueado */}
            <Route path="/" element={<HomeScreen user={{ name: "Pao" }} />} />

            {/* Página de registro */}
            <Route path="/register" element={<RegisterScreen />} />

            {/* Secciones disponibles desde HomeScreen */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transacciones" element={<Transacciones />} />
            <Route path="/tareas-habitos" element={<TareasHabitos />} />

            {/* Página en construcción */}
            <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
          </Routes>
        </main>
        <footer>
          Ejemplo de Pao Fraticola para que hagan lo que mejor les parezca para
          su ejecución y optimización
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
