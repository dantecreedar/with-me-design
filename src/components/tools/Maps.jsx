
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Whatsapp from './Whatsapp';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -27.395196153093455,
  lng: -55.90999912834973
};
/* -27.395196153093455, -55.90999912834973 */

// Reemplaza 'TU_API_KEY' con tu API Key de Google Maps
const apiKey = 'AIzaSyA-qNlK2b5-S0ghcCGkJSc-JzGM5KPrNkY';

// Asume que tienes un array de ubicaciones de sucursales
const sucursales = [
  { lat: -27.395196153093455, lng: -55.90999912834973, nombre: "Sucursal 1" },
  /* { lat: -27.395196153093455, lng: -55.90999912834973, nombre: "Sucursal 2" }, */
  // Añade más sucursales según sea necesario
];

const Maps = () => {
    return (
        <div className='p-5 z-10'>
            <LoadScript
            googleMapsApiKey={apiKey}
            >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                {sucursales.map((sucursal, index) => (
                <Marker key={index} position={{ lat: sucursal.lat, lng: sucursal.lng }} />
                ))}

                
            </GoogleMap>
            </LoadScript>
            <div className='p-5'>Retira nuestros productos en la localidad mas sercana</div>

            <Whatsapp/>
        </div>
    )
}

export default Maps;
