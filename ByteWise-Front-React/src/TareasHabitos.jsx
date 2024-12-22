import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Tareas() {
  // Estado inicial con algunas tareas de ejemplo
  const [tareas, setTareas] = useState([
    { id: 1, descripcion: "Hacer ejercicio", completada: false },
    { id: 2, descripcion: "Estudiar React", completada: true },
    { id: 3, descripcion: "Comprar comida", completada: false },
  ]);

  // Estado para los inputs de nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [descripcionTarea, setDescripcionTarea] = useState("");
  const [tareaEditando, setTareaEditando] = useState(null);

  // Función para agregar una nueva tarea
  const agregarTarea = (e) => {
    e.preventDefault();
    const nuevaTareaObj = {
      id: tareas.length + 1,
      descripcion: nuevaTarea,
      completada: false,
    };
    setTareas([...tareas, nuevaTareaObj]);
    setNuevaTarea("");
  };

  // Función para editar una tarea
  const editarTarea = (id) => {
    const tareaAEditar = tareas.find((tarea) => tarea.id === id);
    if (tareaAEditar) {
      setTareaEditando(id);
      setDescripcionTarea(tareaAEditar.descripcion);
    }
  };

  // Función para guardar los cambios de la tarea editada
  const guardarEdicion = (e) => {
    e.preventDefault();
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === tareaEditando) {
        return { ...tarea, descripcion: descripcionTarea };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    setTareaEditando(null);
    setDescripcionTarea("");
  };

  // Función para marcar tarea como completada o no completada
  const toggleCompletada = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        return { ...tarea, completada: !tarea.completada };
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="container">
      <h1 className="my-4">Gestión de Tareas y Hábitos</h1>

      <div className="row">
        {tareas.map((tarea) => (
          <div key={tarea.id} className="col-12 col-md-4 mb-4">
            <div
              className={`card ${
                tarea.completada
                  ? "bg-light text-success" // Fondo claro con texto verde para tareas completadas
                  : "bg-light text-dark" // Fondo claro con texto oscuro para tareas no completadas
              }`}
            >
              <div className="card-body">
                <h5 className="card-title">
                  <span
                    style={{
                      textDecoration: tarea.completada ? "line-through" : "none",
                    }}
                  >
                    {tarea.descripcion}
                  </span>
                </h5>
                <button
                  className={`btn ${tarea.completada ? "btn-danger" : "btn-success"} me-2`} // Cambiar el color del botón según si está completada o no
                  onClick={() => toggleCompletada(tarea.id)}
                >
                  {tarea.completada ? "Desmarcar" : "Completar"}
                </button>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => editarTarea(tarea.id)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarTarea(tarea.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex justify-content-center">
        <div
          className="card p-3 shadow-sm"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h5>{tareaEditando ? "Editar Tarea" : "Agregar Nueva Tarea"}</h5>
          <form onSubmit={tareaEditando ? guardarEdicion : agregarTarea}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Descripción de la tarea"
              value={tareaEditando ? descripcionTarea : nuevaTarea}
              onChange={(e) =>
                tareaEditando
                  ? setDescripcionTarea(e.target.value)
                  : setNuevaTarea(e.target.value)
              }
              required
            />
            <button type="submit" className="btn btn-primary w-100">
              {tareaEditando ? "Guardar Cambios" : "Agregar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tareas;
