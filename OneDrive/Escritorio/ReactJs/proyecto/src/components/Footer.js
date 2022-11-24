import React from 'react';
import { Link } from 'react-router-dom'

const Footer =() =>{
    return(
        <footer className="footer">
            <div className="redes footer__column">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>
            <div>
                Todos los derechos reservados.
            </div>
            <div className='linksFooter'>
                <Link to='/Merchandising'>Todos los Productos</Link>
                <Link to='/Remeras'>Remeras</Link>
                <Link to='/Almohadones'>Almohadones</Link>
                <Link to='/Figuras'>Figuras</Link>
            </div>
        </footer>
    )
}

export default Footer