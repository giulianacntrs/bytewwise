import React from 'react';
import ResumenGeneral from './ResumenGeneral';
import MetasPresupuestos from './MetasPresupuestos';
import AlertasRecomendaciones from './AlertasRecomendaciones';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <h1>Dashboard Financiero</h1>

            <section>
                <ResumenGeneral />
            </section>

            <section>
                <h2>Metas y Presupuestos</h2>
                <MetasPresupuestos />
            </section>

            <section>
                <AlertasRecomendaciones />
            </section>
        </div>
    );
}

export default Dashboard;