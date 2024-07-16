import { GiWallet } from "react-icons/gi"; 
import { SiMercadopago } from "react-icons/si"; 
import React, { useState } from 'react';
import Whatsapp from './Whatsapp';

const MyWallet = () => {
    const [saldo, setSaldo] = useState(0);
    const [puntos, setPuntos] = useState(0);
    const tasaDeCambioPuntosDolares = 100; // Cada 100 puntos equivalen a 1 dólar

    const opcionesDeCarga = [
        { monto: 5000, puntos: 50 },
        { monto: 10000, puntos: 110 },
        { monto: 20000, puntos: 230 },
        { monto: 50000, puntos: 600 },
        { monto: 100000, puntos: 1250 },
        { monto: 150000, puntos: 1900 },
        { monto: 200000, puntos: 2600 },
        { monto: 250000, puntos: 3350 },
        { monto: 300000, puntos: 4150 },
        // Agrega más opciones según sea necesario
    ];

    // Función para manejar la carga de saldo
    const cargarSaldo = (opcionDeCarga) => {
        setSaldo(saldoActual => saldoActual + opcionDeCarga.monto);
        setPuntos(puntosActuales => puntosActuales + opcionDeCarga.puntos);
        alert(`Has cargado $${opcionDeCarga.monto}. Obtienes ${opcionDeCarga.puntos} puntos.`);
    }

    // Función para canjear puntos por dólares
    const canjearPuntosPorDolares = () => {
        if (puntos >= tasaDeCambioPuntosDolares) {
            const dolaresCanjeados = puntos / tasaDeCambioPuntosDolares;
            setPuntos(0); // Restablecemos los puntos a 0 después del canje
            alert(`Has canjeado tus puntos por ${dolaresCanjeados.toFixed(2)} dólares.`);
        } else {
            alert("No tienes suficientes puntos para canjear.");
        }
    }

    return (
        <div className="text-orange-200">
            <h2 className='text-5xl p-5 flex'>My Wallet <span><GiWallet /></span></h2>
            <div className='text-white p-5 text-center'>
                <div>Cargar Billetera con</div>
                <div className="flex md:text-3xl justify-center"><span className="p-2">Mercadopago</span><span className="p-2 text-4xl"><SiMercadopago /></span></div>
            </div>
            <div className=" text-white text-md p-5 border-b-2">En la sucursal mas sercana o a travez de nuestro whatsapp</div>
            <div className="saldo p-5">
                <h3>Saldo Actual: ${saldo}</h3>
                <h4>Puntos: {puntos}</h4>
            </div>
            <div className="acciones p-5 text-md">
                {opcionesDeCarga.map((opcion, index) => (
                    <div className='' key={index} onClick={() => cargarSaldo(opcion)}>
                        Cargar ${opcion.monto} (Obtiene {opcion.puntos} puntos)
                    </div>
                ))}
                <button onClick={canjearPuntosPorDolares}>Canjear puntos por dólares</button>
            </div>
            <div className="seccion-detalles p-5">
                <h3>¿Cómo funciona?</h3>
                <p>Cada vez que cargues saldo a tu billetera virtual, obtendrás puntos que podrás canjear por descuentos en productos o créditos de compra. Además, tienes la opción de convertir tus puntos acumulados en dólares, a una tasa de 100 puntos por 1 dólar.</p>
            </div>

            <Whatsapp/>
        </div>
    );
}

export default MyWallet;
