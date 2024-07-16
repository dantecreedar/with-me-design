import { useState } from 'react';

const Creditos = () => {
    const [puntos, setPuntos] = useState(0);

    // Función para incrementar los puntos
    const incrementarPuntos = () => {
        setPuntos(puntosActuales => puntosActuales + 100); // Ajusta el valor según la lógica de tu aplicación
    };

    // Función para disminuir los puntos
    const disminuirPuntos = () => {
        setPuntos(puntosActuales => Math.max(0, puntosActuales - 100)); // Evita que los puntos sean negativos
    };

    return (
        <div className="creditos-container text-orange-200" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h2>Puntos Acumulados</h2>
            <div className="contador" style={{ fontSize: '48px', margin: '20px' }}>
                {puntos}
            </div>
            <div className="acciones">
                <button onClick={incrementarPuntos} style={{ fontSize: '20px', padding: '10px 20px', marginRight: '10px' }}>Incrementar</button>
                <button onClick={disminuirPuntos} style={{ fontSize: '20px', padding: '10px 20px' }}>Disminuir</button>
            </div>
            <div>Aun no esta vigente esta Funcion hasta la proxima actualización</div>
            <p className='text-sm'>Podra acceder y consultar sus Creditos por Whatsap y Descargando el Comprobante!</p>
        </div>
    );
};

export default Creditos;
