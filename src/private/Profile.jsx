import { MdDriveFileRenameOutline } from "react-icons/md"; 
import { useAuth0 } from "@auth0/auth0-react"
import PrincipalDash from "./PrincipalDash";
import Logout from "../services/Logout";

function Profile() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isLoading){
        return <div> </div>
    }

    return (
        isAuthenticated && (
            <div>
                    <div className="p-5 grid md:grid-cols-2 place-items-center border bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    {/* profile */}
                    <div className="text-3xl">
                            <h1 className="">Perfil Usuario Whit!</h1>
                            <div className="text-xl flex"><span className="text-2xl"><MdDriveFileRenameOutline /></span>{user.nickname} </div>
                    </div>
                    <div className="p-5 flex shadow-lg bg-white text-black mt-10">
                        <div className="avatar">
                            </div>
                                <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={user.picture} alt={user.name} />
                            </div>
                        </div>
                        <h2 className="text-3xl avatar  border-b-4 p-5"> {user.name} </h2>
                        
                    </div>
                    <div className="text-3xl p-3 text-blue-200"> Creditos para la proxima actualizacion!</div>
                    <p className="pt-5">Email: {user.email} </p>
                </div>
                <PrincipalDash/>
            </div>
        )
        
    )
}

export default Profile