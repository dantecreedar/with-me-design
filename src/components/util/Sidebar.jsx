import { AiOutlineMenuUnfold } from "react-icons/ai"; 
import Logout from "../../services/Logout";
import { Link } from "react-router-dom";


function Sidebar() {
    return (
        <div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="text-3xl"><AiOutlineMenuUnfold /></label>
                    </div> 
                    <div className="drawer-side z-100">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full text-white backdrop-blur-sm bg-white/30">
                        {/* Sidebar content here */}
                        <div className=""><Logout/></div>
                        <div>
                            <h2 className="p-5 border-b-2">Salir de la Sesion</h2>
                        </div>
                        <div>
                            <h3 className="p-5">Actualizacion disponible Junio 2024</h3>
                        </div>
                        {/* <ul className="grid grid-cols-1 row-span-1 md:row-span-2 gap-2 p-5 text-white">
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-xl hover:bg-orange-400"><Link to="/buy">Buy</Link></li>
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-xl hover:bg-orange-400"><Link to="/credit">Credito</Link></li>
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-xl hover:bg-orange-400"><Link to="/wallet">Wallet</Link></li>
                            <li className="p-5 flex justify-center items-center bg-orange-600 transition-all rounded-xl hover:bg-orange-400"><Link to="/map">Maps</Link></li>
                        </ul> */}
                        <footer className="footer footer-center p-4 text-white">
                            <aside>
                                <p>Copyright © 2024 - All right reserved by WhitMe Company</p>
                            </aside>
                        </footer>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar
