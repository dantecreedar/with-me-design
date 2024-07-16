import { FloatingWhatsApp } from 'react-floating-whatsapp'
import icon from "../../assets/icons/withme.png"
function Whatsapp() {
    return (
        <div>
                <FloatingWhatsApp 
                phoneNumber="123456789"
                accountName="WhitME"
                placeholder='Habla conmigo'
                avatar={icon}
                chatMessage='Bienvenido a WITHME!'
                allowEsc
                allowClickAway
                notification
                notificationSound
                />
        </div>
    )
}

export default Whatsapp
