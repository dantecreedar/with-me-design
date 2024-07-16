import { MdLogout } from "react-icons/md"; 
import { useAuth0 } from "@auth0/auth0-react"

function Logout() {

    const { logout } = useAuth0();

    return (
        
        <button className="bg-red-400 text-sm hover:bg-red-600 text-white m-2 flex" 
            onClick={
            ()=> logout({returnTo: window.location.origin})
            }> <span className="p-3"><MdLogout /></span> <span className="p-3">Salir</span>
        </button>
    )
}

export default Logout