import { BiNetworkChart } from "react-icons/bi"; 
import { BsPersonWorkspace } from "react-icons/bs"; 
import React from 'react'

function jobs() {
    return (
        <div>
                <div>
                    <h2>Como trabajar con Whitme?</h2>
                    <hr />
                    <h3 className='p-5'>Te explico!</h3>
                    <p className='p-5'>Trabajar con withme es tan sencillo como parece, sigue las indicaciones y podras entender!</p>
                    <ul>
                        <li className='p-5'>Paso 1: Selecciona uno o mas productos</li>
                        <li className='p-5'>Paso 2: Acceder al whatsapp Nuestra inteligencia artificial hara el trabajo de informarte los productos disponibles esta semana con sus precios de venta/comisiones</li>
                        <li className='p-5'>Paso 3: Confirmas una compra con tu cliente  una vez que le muestras el producto tu solicitaras un descuento conrrespecto a las compras por unidades</li>
                        <li className='p-5'>Paso 4: LLevas el comprobante que te daremos en whatsap llevas a la sucursal abonar y se te recargara puntos para poder combrar tu primera comision apenas cumplas la meta.</li>
                        <li className='p-5'>Meta: Las metas estaran recopiladas en el sector Billeteresa, encontraras datos de lo usos de puntos y como usarlos tanto para la compra como para tu uso personal </li>
                    </ul>
                    <div className='text-center p-5'><h1 className="flex justify-center">LISTO ya puedes trabajar con WITHME!<BiNetworkChart /></h1></div>
                </div>
        </div>
    )
}

export default jobs
