import { useEffect, useState } from "react";
import style from "./style.module.css"

export const CredibilitySection = () => {
    const [count, setCount] = useState(0);
    const target = 3000;

    useEffect(() => {
        setTimeout(() => {
            if (count < target) setCount(count + 1);
        }, 1)
    })

    // while (count < target) {
    //     setTimeout(()=>{count += 1;},200) 
    // }

    return (
        <section className={`d-flex justify-content-around py-3 ${style.section}`}>
            <div className={`col-2 text-center ${style.text}`}>
                <div className="display-3">10+</div>
                <div className="fs-4">ANOS DE EXPERIÊNCIA</div>
            </div>
            <div className={`col-2 text-center ${style.text}`}>
                <div className="display-3"><span>{count}</span>+</div>
                <div className="fs-4">CLIENTES ATENDIDOS</div>
            </div>
            <div className={`col-2 text-center ${style.text}`}>
                <div className="display-3">5&#9733;</div>
                <div className="fs-4">AVALIAÇÕES DO GOOGLE</div>
            </div>
        </section>
    )
}