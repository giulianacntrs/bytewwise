import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function HomeScreen({ user }) {


  return (
    <>
        <div className="home-container text-center py-5">
          <div className="texto-home">
            <h1>{user.name}, te damos la bienvenida a ByteWise</h1>
            <p>¿Qué te gustaría hacer hoy?</p>
          </div>
        </div>

        <div className="container contenedor-cards">
          <h2>Gestiones</h2>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 mb-4 d-flex">
              <div className="option-card p-4 border rounded shadow-sm w-100">
                <h3>Dashboard</h3>
                <p>Visualiza un resumen de tu situación financiera.</p>
                <Link to="/dashboard" className="btn btn-primary">
                  Ir al Dashboard
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4 d-flex">
              <div className="option-card p-4 border rounded shadow-sm w-100">
                <h3>Transacciones</h3>
                <p>Administra tus ingresos y gastos.</p>
                <br />
                <Link to="/transacciones" className="btn btn-primary">
                  Gestionar Transacciones
                </Link>
              </div>
            </div>

            <div className="col-12 col-md-4 mb-4 d-flex">
              <div className="option-card p-4 border rounded shadow-sm w-100">
                <h3>Tareas y Hábitos</h3>
                <p>Organiza tus tareas y hábitos financieros.</p>
                <Link to="/tareas-habitos" className="btn btn-primary">
                  Gestionar Tareas y Hábitos
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default HomeScreen;
