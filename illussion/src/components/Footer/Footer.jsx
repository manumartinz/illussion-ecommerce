import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        
<footer className="footer">
        <h3>I L L U S I O N</h3>
        <div className="footer__listado">
            <ul className="listado">
                <li>
                    <a href="/">Preguntas Frecuentes</a>
                </li>
                <li>
                    <a href="/">Quienes Somos</a>
                </li>
                <li>
                    <a href="/">Formas de Pago</a>
                </li>
                <li>
                    <a href="/">Sucursales</a>
                </li>
            </ul>
            <ul className="listado">
                <li>
                    <a href="/">Términos y Condiciones</a></li>
                <li>
                    <a href="/">Políticas de Cambio</a></li>
                <li>
                    <a href="/">Arrepentimiento de Compra</a></li>
            </ul>
        </div>
        <div className="goup">
            <i className="fas fa-arrow-up"></i>
        </div>
        <p>Designed by <a href="/" target="_blank">manu</a></p>
    </footer>
    )
}

export default Footer

