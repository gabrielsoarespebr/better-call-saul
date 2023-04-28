import { useEffect, useState } from "react";
import style from "./style.module.css"

export const Credibility = () => {
    const [count, setCount] = useState(0);
    const target = 3000;

    useEffect(() => {
        setTimeout(() => {
            if (count < target) setCount(count + 1);
        }, 0)
    })

    return (
        <section className={`d-flex justify-content-around py-3 ${style.section}`}>
            <div className={`col-3 text-center ${style.text}`}>
                <div className={style.bigFontSize}>10+</div>
                <div>ANOS DE EXPERIÊNCIA</div>
            </div>
            <div className={`col-3 text-center ${style.text}`}>
                <div className={style.bigFontSize}><span>{count}</span>+</div>
                <div>CLIENTES ATENDIDOS</div>
            </div>
            <div className={`col-3 text-center ${style.text}`}>
                <div className={style.bigFontSize}>5&#9733;</div>
                <div>AVALIAÇÕES DO GOOGLE</div>
            </div>
        </section>
    )
}