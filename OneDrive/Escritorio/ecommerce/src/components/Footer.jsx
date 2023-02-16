import React from 'react';
import { Link } from 'react-router-dom'
import { FaLinkedin} from "react-icons/fa";
import { GrMail} from "react-icons/gr";
import { IoLogoWhatsapp} from "react-icons/io";

const Footer =() =>{
    return(
        <footer className="footer">
            <div className='footerContainer'>
                <div className="redesFooter">
                    <a href="https://www.linkedin.com/in/gomezjonathanwd/" target= '_blank'><FaLinkedin /> Mi Perfil</a>
                    <a href="https://wa.me/1123917209" target= '_blank'><IoLogoWhatsapp /> Escribime al 1123917209</a>
                    <a><GrMail/> jurielgomez_1993@hotmail.com</a>
                </div>
                <div className="marcaFooter">
                    <h5>Fishy Fishy Dish Store</h5>
                    <p>Todos los derechos reservados.</p>
                    <p>2023</p>
                </div>
                <div className='linksFooter'>
                    <h5>Otros links de interés:</h5>
                    <Link to='/SobreMi'>Sobre Mi</Link>
                    <a href="https://www.youtube.com/watch?v=mCdA4bJAGGk">Contacto</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer