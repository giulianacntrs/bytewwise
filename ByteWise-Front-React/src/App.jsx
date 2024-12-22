import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RegisterScreen from "./RegisterScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import Dashboard from "./Dashboard";
import Transacciones from "./Transacciones";
import TareasHabitos from "./TareasHabitos";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/color-bw-03.svg";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const ERROR_MESSAGE = "¡UPS! Esa página no existe...";

  return (
    <>
      <BrowserRouter>
    
          <Navbar />
     
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen user={{ name: "Giuli" }} />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transacciones" element={<Transacciones />} />
            <Route path="/tareas-habitos" element={<TareasHabitos />} />
            <Route path="*" element={<div>{ERROR_MESSAGE}</div>} />
          </Routes>
        </main>
        <footer className="py-4">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-0 mb-md-0">
                <h5 className="mb-0 text-center text-md-start">Legales</h5>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/terminos-condiciones"
                      className="text-decoration-none"
                    >
                      Términos y Condiciones
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/politica-privacidad"
                      className="text-decoration-none"
                    >
                      Política de Privacidad
                    </Link>
                  </li>
                  <li>
                    <Link to="/cookies" className="text-decoration-none">
                      Política de Cookies
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-0 mb-md-0">
                <h5 className="mb-0 text-center text-md-start">
                  Menú principal
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/dashboard" className="text-decoration-none">
                      Metas
                    </Link>
                  </li>
                  <li>
                    <Link to="/transacciones" className="text-decoration-none">
                      Transacciones
                    </Link>
                  </li>
                  <li>
                    <Link to="/tareas-habitos" className="text-decoration-none">
                      Tareas / Hábitos
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-4 d-flex flex-column align-items-center mb-0 mb-md-0">
                <div>
                  <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="logo mb-0" />
                  </Link>
                  <p>
                    <strong>Teléfono:</strong> +1 234 567 890
                  </p>
                  <p>
                    <strong>Email:</strong> ejemplo@financiero.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
