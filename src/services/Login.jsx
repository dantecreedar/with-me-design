import { useAuth0 } from "@auth0/auth0-react"

function Login() {

    const { loginWithRedirect } = useAuth0();


    return (
        <button className="btn btn-success text-white m-2" onClick={
        ()=> loginWithRedirect()
        }>Iniciar Sesión</button>
    )
}

export default Login