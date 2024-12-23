import React, { useState } from "react";

function MetasPresupuestos() {
  const [metas, setMetas] = useState([]);
  const [nombreMeta, setNombreMeta] = useState("");
  const [montoMeta, setMontoMeta] = useState(0);
  const [completadoMeta, setCompletadoMeta] = useState(false);
  const [metaEditando, setMetaEditando] = useState(null);

  const agregarMeta = () => {
    if (!nombreMeta || montoMeta <= 0) {
      alert("Por favor, complete el nombre y el monto de la meta.");
      return;
    }
    const nuevaMeta = {
      id: metas.length + 1,
      nombre: nombreMeta,
      monto: montoMeta,
      completado: completadoMeta,
    };
    setMetas([...metas, nuevaMeta]);

    setNombreMeta("");
    setMontoMeta(0);
    setCompletadoMeta(false);
  };

  const editarMeta = (id, nuevoNombre, nuevoMonto, nuevoCompletado) => {
    const metasActualizadas = metas.map((meta) => {
      if (meta.id === id) {
        return {
          ...meta,
          nombre: nuevoNombre,
          monto: nuevoMonto,
          completado: nuevoCompletado,
        };
      }
      return meta;
    });
    setMetas(metasActualizadas);
    setMetaEditando(null);
    setNombreMeta("");
    setMontoMeta(0);
    setCompletadoMeta(false);
  };

  const eliminarMeta = (id) => {
    setMetas(metas.filter((meta) => meta.id !== id));
  };

  const toggleMetaCompletada = (id) => {
    setMetas(
      metas.map((meta) =>
        meta.id === id ? { ...meta, completado: !meta.completado } : meta
      )
    );
  };

  return (
    <div>
      <h3>Metas Activas</h3>

      <div className="row">
        {metas.map((meta) => (
          <div key={meta.id} className="col-12 col-md-4 mb-4">
            <div className="card p-4 shadow-sm">
              <h5>{meta.nombre}</h5>
              <p>${meta.monto}</p>
              <p>{meta.completado ? "Completada" : "No completada"}</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => toggleMetaCompletada(meta.id)}
                >
                  {meta.completado ? "Marcar como No Completada" : "Marcar como Completada"}
                </button>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => {
                    setNombreMeta(meta.nombre);
                    setMontoMeta(meta.monto);
                    setCompletadoMeta(meta.completado);
                    setMetaEditando(meta.id);
                  }}
                >
                  Editar
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => eliminarMeta(meta.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex justify-content-center">
        <div className="card p-3 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <h5>{metaEditando ? "Editar Meta" : "Agregar Nueva Meta"}</h5>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Nombre de la meta"
            value={nombreMeta}
            onChange={(e) => setNombreMeta(e.target.value)}
          />
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Monto"
            value={montoMeta}
            onChange={(e) => setMontoMeta(parseFloat(e.target.value))}
          />
          {metaEditando ? (
            <button
              className="btn btn-success w-100"
              onClick={() => editarMeta(metaEditando, nombreMeta, montoMeta, completadoMeta)}
            >
              Guardar Cambios
            </button>
          ) : (
            <button
              className="btn btn-primary w-100"
              onClick={agregarMeta}
            >
              Agregar Meta
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MetasPresupuestos;
