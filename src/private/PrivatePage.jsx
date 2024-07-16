import { BiNetworkChart } from "react-icons/bi"; 

import Login from "../services/Login"
import Logout from "../services/Logout"
import { useAuth0} from "@auth0/auth0-react"
import Profile from "../private/Profile";
import PrincipalDash from "./PrincipalDash";


export default function PrivatePage() {
    const { isAuthenticated } = useAuth0();


    if(isAuthenticated) {
        return(
            <>
                <Profile/>
            </>
        )
    }else{
        return(
            <>
                <div className="p-5 grid md:grid-cols-2 place-items-center border bg-slate-100 shadow-xl">
                    <div className="p-3">
                        <h1 className="text-4xl font-bold text-blue-600 flex">WHITME<BiNetworkChart /></h1>
                        <p>WithME te ayuda a convertirte en un comerciante y a poder conseguir el trabajo que necesitas!</p>
                    </div>
                    <div>
                        <div className="border p-5 lg:flex justify-center bg-white shadow-lg">
                            <h2 className="text-xl flex justify-center items-center">Accede a los mejores precios y comisiones</h2>
                            <div className="p-2 flex justify-center items-center"><Login/></div>
                        </div>
                        <div className="text-sm p-3">Crea una red de confianza con clientes, una marca o una empresa.</div>
                    </div>
                </div>
                <footer>
                    <footer className="footer footer-center p-4 bg-slate-100 text-base-content fixed bottom-0 ">
                    <aside>
                        <p>Copyright © 2024 - All right reserved by WithMe App</p>
                    </aside>
                    </footer>
                </footer>
            </>
        )
    }
}