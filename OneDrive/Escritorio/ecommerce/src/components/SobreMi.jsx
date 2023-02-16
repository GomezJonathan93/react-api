import React from "react"
import {SiHtml5, SiCss3, SiSass, SiJavascript, SiGit, SiBootstrap} from "react-icons/si"
import {GrReactjs, GrGithub} from "react-icons/gr"

const SobreMi=()=>{
    return(
        <div className="cvContainer">
            <div className="fotoNombre">
                <h1 className="titulo">Mi curriculum</h1>
            </div>
            <div className="tecnologiasContainer">
                <hr />
                <div className="tecnologiasLogoContainer">
                    <SiHtml5/>
                    <SiCss3/>
                    <SiSass/>
                    <SiJavascript/>
                    <GrReactjs/>
                    <GrGithub/>
                    <SiGit/>
                    <SiBootstrap/>
                </div>
                <hr />
            </div>
            <article className="cvCuerpo">
                <div className="cvCuerpoFoto">
                    <img className="foto" src="../public/images/foto2.png" alt="" />
                    <i>Soy una persona de caracter sociable y tranquilo con un enfoque muy fuerte hacia el trabajo en equipo y el constante aprendizaje de nuevas habilidades que sean valiosas para mi desarrollo así como el perfeccionar las ya adquiridas.</i>
                </div>
                <div className="datosContainer">
                    <div>
                        <p>Nombre Completo: <span>Jonathan Uriel Gómez</span></p>
                        <p>Fecha de Nacimiento: <span>29/11/1993</span></p>
                        <p>Nacionalidad: <span>Argentino</span></p>
                        <p>Whatsapp: <span>1123917209</span></p>
                    </div>
                    <div>
                        <p>Email: <span>jurielgomez_1993@hotmail.com</span></p>
                        <p>Residencia: <span>Lanús Este, Provincia de Buenos Aires</span></p>
                        <p>GitHub: <span><a href="https://github.com/GomezJonathan93" target="_blank">/GomezJonathan93</a></span></p>
                        <p>LinkedIn: <span><a href="https://www.linkedin.com/in/gomezjonathanwd/" target="_blank">/GomezJonathanWD</a></span></p>
                    </div>
                </div>
                <hr />
                <div className="educacionRelevante">
                    <h2 className="titulo">Educación Relevante</h2>
                    <img className="diploma2" src="../public/images/front.png" alt=""/>
                    <ul className="diplomasContainer">
                        <li><img className="diploma" src="../public/images/desarrolloweb.png" alt=""/></li>
                        <li><img className="diploma" src="../public/images/javascript.png" alt=""/></li>
                        <li><img className="diploma" src="../public/images/reactjs.png" alt=""/></li>
                    </ul>
                </div>
                <hr />
                <div className="experienciaContainer">
                    <h3 className="titulo">Experiencia Relevante</h3>
                    <p>Ninguna por el momento T_T</p>
                </div>
                <hr />
            </article>
        </div>
    )
}
export default SobreMi