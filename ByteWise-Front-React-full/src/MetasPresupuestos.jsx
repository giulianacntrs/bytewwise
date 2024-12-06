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
      <ul>
        {metas.map((meta) => (
          <li key={meta.id}>
            {meta.nombre} - ${meta.monto}
            {meta.completado ? " (Completada)" : ""}
            <button onClick={() => toggleMetaCompletada(meta.id)}>
              {meta.completado ? "Completar" : "Completada"}
            </button>
            <button
              onClick={() => {
                setNombreMeta(meta.nombre);
                setMontoMeta(meta.monto);
                setCompletadoMeta(meta.completado);
                setMetaEditando(meta.id); 
              }}
            >
              Editar
            </button>
            <button id="btn-eliminar" onClick={() => eliminarMeta(meta.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <div>
        <input
          type="text"
          placeholder="Nombre de la meta"
          value={nombreMeta}
          onChange={(e) => setNombreMeta(e.target.value)}
        />
        <br />

        <input
          type="number"
          placeholder="Monto"
          value={montoMeta}
          onChange={(e) => setMontoMeta(parseFloat(e.target.value))}
        />
        <br />

        {metaEditando ? (
          <button
            onClick={() => editarMeta(metaEditando, nombreMeta, montoMeta, completadoMeta)}
          >
            Guardar Cambios
          </button>
        ) : (
          <button onClick={agregarMeta}>Agregar Meta</button>
        )}
      </div>
    </div>
  );
};

export default MetasPresupuestos;
