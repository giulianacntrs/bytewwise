import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function ResumenGeneral() {
    // Datos de ejemplo para los gráficos
    const data = [
        { name: 'Enero', ingresos: 4000, gastos: 2400 },
        { name: 'Febrero', ingresos: 3000, gastos: 1398 },
        { name: 'Marzo', ingresos: 2000, gastos: 9800 },
        { name: 'Abril', ingresos: 2780, gastos: 3908 }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Estado Financiero Actual</h3>
            <BarChart width={600} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="ingresos" fill="#8884d8" />
                <Bar dataKey="gastos" fill="#82ca9d" />
            </BarChart>

            <div className="option-card">
            Ingreso Total: $10,000 
                </div>
                <div className="option-card">
                Gasto Total: $8,500
                </div>
        </div>
    );
}

export default ResumenGeneral;