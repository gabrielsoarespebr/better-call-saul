import style from "./style.module.css"
import { Video } from "../Video"

export const Gallery = () => {
    return (
        <section id="gallery" className={style.container}>
            <Video/>
        </section>
        
    )
}