import { BiNetworkChart } from "react-icons/bi"; 

import { Link, Outlet } from 'react-router-dom'
import Sidebar from '../components/util/Sidebar'


function PrincipalDash() {
    return (
        <div>
            <div className="grid md:grid-cols-3 bg-white">
                <div className="col-span-1 bg-gradient-to-tr bg-white text-black">
                    <div className='border-b-2 p-5'><Sidebar/></div>
                    <div>
                        <ul className="grid md:grid-cols-1 grid-cols-2 row-span-1 md:row-span-2 gap-2 p-5 text-white">
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-full hover:bg-orange-400"><Link to="/">Comprar</Link></li>
                            {/* <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-full hover:bg-orange-400"><Link to="/credit">Credito</Link></li> */}
                           {/*  <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-full hover:bg-orange-400"><Link to="/wallet">Billetera</Link></li> */}
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-full hover:bg-orange-400"><Link to="/map">Mapa</Link></li>
                          {/*   <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-full hover:bg-orange-400"><Link to="/Jobs">Trabajar</Link></li> */}
                        </ul>
                    </div>
                </div>
                
                <div className="h-screen md:col-span-2 grid grid-cols-1 bg-white" id="view">
                    <div className="border text-3xl overflow-y-auto p-5 bg-neutral-100 text-black"> <div className='p-5 text-5xl flex'>WITHME<BiNetworkChart /></div> <Outlet/> </div>
                        {/*  <ul className="grid grid-cols-2 row-span-1 md:row-span-2 gap-2 p-5 bg-orange-500 text-white">
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-xl hover:bg-orange-400"><Link to="/buy">Buy</Link></li>
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-xl hover:bg-orange-400"><Link to="/credit">Credito</Link></li>
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-xl hover:bg-orange-400"><Link to="/wallet">Wallet</Link></li>
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-xl hover:bg-orange-400"><Link to="/map">Maps</Link></li>
                        </ul> */}
                </div>
            </div>
            
        </div>
    )
}

export default PrincipalDash
