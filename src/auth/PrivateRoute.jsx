import { Navigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  let location = useLocation();

  if (isLoading) return <div>Cargando...</div>;

  return isAuthenticated ? children : <Navigate to="/" state={{ from: location }} />;
};
