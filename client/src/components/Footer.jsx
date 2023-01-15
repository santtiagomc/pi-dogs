import React from "react";
import style from   "./styles/Footer.module.css"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"
import email from "../img/email.png"

export default function Footer () {
    return (
            <footer>
                <a href="https://github.com/santtiagomc" className={style.btn} target="_blank" rel="noreferrer">
                    <img src={github} alt="github"  />
                    {/* <h3>GitHub</h3> */}
                </a>
                <a href="https://linkedin.com/in/santtiagomc" className={style.btn} target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="linkedin" />
                    {/* <h3>Linkedin</h3> */}
                </a>
                <a href="mailto:santtiagomc@gmail.com" className={style.btn} target="_blank" rel="noreferrer">
                    <img src={email} alt="email" />
                    {/* <h3>Email </h3> */}
                </a>
            </footer>
    )
}