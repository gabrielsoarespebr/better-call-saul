import style from "./style.module.css"

export const VideoSection = () => {
    return (
        <section id="about" className="d-flex justify-content-between gap-2">
            <iframe className="m-auto my-4" width="560" height="315" src="https://www.youtube.com/embed/CQx0k1dyuBo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className={`col-3 d-flex flex-column justify-content-center ${style.btnGroup}`}>
                <img src={"./src/assets/images/SaulGoodmanPhone.png"} alt="Saul Goodman on Phone" />
                <button type="button" className={style.btn}>É MELHOR LIGAR PARA O SAUL!</button>
            </div>

        </section>
    )
}