import { useState } from "react"
import style from "./style.module.css"
import { useEffect } from "react";

export function ScrollProgress() {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScrollTop = () => {
        let windowScroll = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let amountScrolled = (windowScroll / height) * 100;

        setScrollTop(amountScrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollTop);
    })

    return (
        <div style={{ width: `${scrollTop}%` }} className={style.scrollProgress}>&nbsp;</div>
    )
}