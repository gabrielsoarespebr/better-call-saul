import { useEffect, useState } from "react"
import { Form } from "../Form"
import style from "./style.module.css"
import { GoAlert, GoLaw } from "react-icons/go"
import saulOnPhone from '../../assets/images/SaulGoodmanPhone.png'

export const Contact = () => {
    const [displayBlinkBoolean, setDisplayBlinkBoolean] = useState(true);
    useEffect(() => {
        const timer = setInterval(() =>
            setDisplayBlinkBoolean(displayBlinkBoolean => !displayBlinkBoolean), 3000
        );

        return () => { clearInterval(timer) };
    }, [])


    return (
        <section id="contact" style={{ height: "100vh" }} className="d-flex justify-content-center justify-content-sm-between align-items-center gap-2">
            <div className="text-center col-8">
                {(displayBlinkBoolean) ? <h3 className="fs-4" style={{ color: "var(--yellowLight)" }}><GoAlert /> NÃO DEIXE SEU DIREITO NA MÃO DE AMADORES <GoAlert /></h3> : <h3 className="fs-4" ><GoLaw /> ENTRE EM CONTATO COM UM ESPECIALISTA AGORA <GoLaw /></h3>}
                <Form />
            </div>
            <a href={"http://bettercallsaul.amc.com"} target="_blank" className={`col-3 d-none d-sm-flex flex-column justify-content-center text-decoration-none ${style.btnGroup}`}>
                <img src={saulOnPhone} alt="Saul Goodman on Phone" />
                <p className={style.btnText}>É MELHOR LIGAR PARA O SAUL!</p>
            </a>
        </section>
    )
}