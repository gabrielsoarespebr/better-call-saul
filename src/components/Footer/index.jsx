import style from "./style.module.css"

export function Footer() {
    return (
        <footer className='d-flex justify-content-between gap-1 text-black lh-1'>
            <div className={style.speechBubble}>
                <p>Olá, crianças! Aqui quem fala é o melhor advogado que vocês podem encontrar em Albuquerque: Saul Goodman!</p>
                <p>Tô aqui pra falar de um cara tão bom quanto eu, o garoto que fez essa maravilha de site que vocês estão navegando agora mesmo. Eu desconfio que ele seja mais um daqueles hackers que em breve será pego pelo FBI e escreverá um livro na prisão. Mas olha, tenho que admitir, o que ele faz é impressionante!</p>
                <div className="d-flex justify-content-around gap-3">
                    <div className="col-5 text-center">
                        <p>Contrate-o antes que ele seja preso:</p>
                        <ul className={`list-unstyled d-flex justify-content-center gap-3 m-0 ${style.btnRedirect}`}>
                            <li>
                                <a href="https://www.linkedin.com/in/gabrielsoarespebr/" target="_blank">
                                    <img src={"./src/assets/icons/LinkedinCircle.png"} alt="Gabriel Soares - LinkedIn" title="Gabriel Soares - LinkedIn" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/gabrielsoarespebr/better-call-saul" target="_blank">
                                    <img src={"./src/assets/icons/GithubCircle.png"} alt="Gabriel Soares - Github" title="Gabriel Soares - Github" />
                                </a>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-5 text-center">
                        <p>Você também pode se interessar em:</p>
                        <ul className={`list-unstyled d-flex justify-content-center gap-3 m-0 ${style.btnRedirect}`}>
                            <li>
                                <a href="http://www.savewalterwhite.com" target="_blank">
                                    <img src={"./src/assets/icons/SaveWalterWhite.png"} alt="Save Walter White" title="Save Walter White" />
                                </a>
                            </li>
                            <li>
                                <a href="http://www.lphishiring.com" target="_blank">
                                    <img src={"./src/assets/icons/LosPollosHermanos.png"} alt="Los Pollos Hermanos" title="Los Pollos Hermanos" />
                                </a>
                            </li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <img className={`col-3 mt-3 ${style.saulSpeaking}`} src={"./src/assets/images/SaulGoodmanOnDesk.png"} alt="Saul Goodman On Desk" />
        </footer>
    )
}