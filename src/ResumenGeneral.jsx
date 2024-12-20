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
        <div className="container">
            <h3 className="text-center">Estado Financiero Actual</h3>
            <div className="row justify-content-center">
                {/* Gráfico */}
                <div className="col-12 col-md-6 mb-4">
                    <BarChart
                        width={600}
                        height={400}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="ingresos" fill="#8884d8" />
                        <Bar dataKey="gastos" fill="#82ca9d" />
                    </BarChart>
                </div>

                {/* Montos */}
                <div className="col-12 col-md-3 mb-4">
                    <div className="resumen-card p-4 border rounded shadow-sm">
                        <h5>Ingreso Total:</h5>
                        <p>$10,000</p>
                    </div>
                    <div className="resumen-card p-4 border rounded shadow-sm mt-3">
                        <h5>Gasto Total:</h5>
                        <p>$8,500</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResumenGeneral;
