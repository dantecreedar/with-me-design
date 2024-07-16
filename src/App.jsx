import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from "./components/Buy";
import Wallet from "./components/Wallet";
import Maps from "./components/tools/Maps";
import Layouts from "./components/Layouts";
import Home from "./components/Home";
import Jobs from "./components/tools/jobs";
import Login from "./services/Login";
import Credit from "./components/tools/Credit";
import { useEffect, useState } from "react";
import PrincipalDash from "./private/PrincipalDash";
import ProtectedRoute from "./../src/private/ProtectedRoute";
import PrivatePage from "./../src/private/PrivatePage";
import { useAuth0 } from "@auth0/auth0-react" 
import MyWallet from "./components/tools/MyWallet";

function App() {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false); 
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return <div className="h-screen grid grid-cols-1 place-items-center bg-white "><div className="loading loading-spinner loading-md"></div></div>; // Muestra el efecto de carga
  }

  const { user} = useAuth0();

  
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Layouts/>}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route  element={<ProtectedRoute canActivated={user}/>}>
              <Route path='home' element={<Home/>} />
          </Route>

          <Route path="/" element={<Buy />} />
          <Route path="wallet" element={<MyWallet />} />
          <Route path="credit" element={<Credit />} />
          <Route path="map" element={<Maps />} />
          <Route path="jobs" element={<Jobs />} />

          
          {/* pirvate */}
          <Route path='private' element={<PrivatePage/>} />

        </Route>
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
}

export default App;
