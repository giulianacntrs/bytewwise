import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Transacciones() {
  // Estado inicial con algunas transacciones de ejemplo
  const [transacciones, setTransacciones] = useState([
    { id: 1, descripcion: "Pago de alquiler", monto: -500 },
    { id: 2, descripcion: "Sueldo", monto: 1500 },
    { id: 3, descripcion: "Compra supermercado", monto: -200 },
  ]);

  // Estado para los inputs de nueva transacción
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [nuevoMonto, setNuevoMonto] = useState("");

  // Estado para editar una transacción
  const [transaccionEditando, setTransaccionEditando] = useState(null);
  const [descripcionTransaccion, setDescripcionTransaccion] = useState("");
  const [montoTransaccion, setMontoTransaccion] = useState("");

  // Función para agregar una nueva transacción
  const agregarTransaccion = (e) => {
    e.preventDefault();
    const nuevaTransaccion = {
      id: transacciones.length + 1,
      descripcion: nuevaDescripcion,
      monto: parseFloat(nuevoMonto),
    };
    setTransacciones([...transacciones, nuevaTransaccion]);
    setNuevaDescripcion("");
    setNuevoMonto("");
  };

  // Función para editar una transacción
  const editarTransaccion = (id) => {
    // Buscamos la transacción a editar
    const transaccionAEditar = transacciones.find(
      (transaccion) => transaccion.id === id
    );
    if (transaccionAEditar) {
      setTransaccionEditando(id);
      setDescripcionTransaccion(transaccionAEditar.descripcion);
      setMontoTransaccion(transaccionAEditar.monto);
    }
  };

  // Función para guardar los cambios de la transacción editada
  const guardarEdicion = (e) => {
    e.preventDefault();
    const transaccionesActualizadas = transacciones.map((transaccion) => {
      if (transaccion.id === transaccionEditando) {
        return {
          ...transaccion,
          descripcion: descripcionTransaccion,
          monto: parseFloat(montoTransaccion),
        };
      }
      return transaccion;
    });
    setTransacciones(transaccionesActualizadas);
    setTransaccionEditando(null);
    setDescripcionTransaccion("");
    setMontoTransaccion("");
  };

  const eliminarTransaccion = (id) => {
    setTransacciones(transacciones.filter((transaccion) => transaccion.id !== id));
  };

  return (
    <div className="container">
    <h1 className="my-4">Transacciones</h1>

    <div className="row">
      {/* Mapeamos las transacciones y las mostramos en cards */}
      {transacciones.map((transaccion) => (
        <div key={transaccion.id} className="col-12 col-md-4 mb-4">
          <div
            className={`card ${
              transaccion.monto < 0 ? "bg-light text-danger" : "bg-light text-success"
            }`}
          >
            <div className="card-body">
              <h5 className="card-title">{transaccion.descripcion}</h5>
              <p className="card-text">${transaccion.monto}</p>
              <button
                className="btn btn-warning me-2"
                onClick={() => editarTransaccion(transaccion.id)}
              >
                Editar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => eliminarTransaccion(transaccion.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-4 d-flex justify-content-center">
      <div className="card p-3 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <h5>{transaccionEditando ? 'Editar Transacción' : 'Agregar Nueva Transacción'}</h5>
        <form onSubmit={transaccionEditando ? guardarEdicion : agregarTransaccion}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Descripción"
            value={transaccionEditando ? descripcionTransaccion : nuevaDescripcion}
            onChange={(e) =>
              transaccionEditando
                ? setDescripcionTransaccion(e.target.value)
                : setNuevaDescripcion(e.target.value)
            }
            required
          />
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Monto"
            value={transaccionEditando ? montoTransaccion : nuevoMonto}
            onChange={(e) =>
              transaccionEditando
                ? setMontoTransaccion(e.target.value)
                : setNuevoMonto(e.target.value)
            }
            required
          />
          <button type="submit" className="btn btn-primary w-100">
            {transaccionEditando ? "Guardar Cambios" : "Agregar"}
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Transacciones;
