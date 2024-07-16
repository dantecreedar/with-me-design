import {Navigate, Outlet} from "react-router-dom"

function ProtectedRoute({
        // eslint-disable-next-line react/prop-types
        canActivated,
        // eslint-disable-next-line react/prop-types
        redirectPath = "/private"
}) {

    if(!canActivated){
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet/>
    
}

export default ProtectedRoute