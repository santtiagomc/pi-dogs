import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import style from './styles/About.module.css'

export default function About () {
return(
    <div>
        <div>
            <Nav />
        </div>
        <div className={style.card}>
            <h1 className={style.name}>Santiago Parra Moreno</h1>
            <h2>Full Stack Developer</h2>
            <h4>Soy Full Stack Web Developer, con orientacion al desarrollo en Frontend.
            He desarrollado diferentes proyectos entre ellos SPA(Single Page Application)
            donde e logrado afianzar las habilidades aprendidas como lo son en:
            <br />
            <br />
            Frontend: HTML, CSS, JavaScript, React, Redux
            Backend: Express, Node, Sequelize
            Database: PostgreSQL
            VCS: Git/GitHub.
            <br />
            <br />
            Estoy totalmente abierto a aprender nuevas tecnologías, como a
            enfrentar nuevos desafios, para ir creciendo 
            <br />
            <br />
            tanto personal como profesionalmente.
            <br />
            <br />
            En la parte de abajo dejo mis redes sociales 
            para que me puedan contactar o ver mas de mis proyectos.</h4>
        </div>
        <Footer />
    </div>
)
}