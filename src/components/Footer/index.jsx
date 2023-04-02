import style from "./style.module.css"

export function Footer() {
    return (
        <footer className='text-center py-3 mb-0'>
            <p className='m-0 fs-5'>
                Desenvolvido por <a className='text-reset text-decoration-none' href="https://github.com/gabrielsoarespebr/better-call-saul" target={'_blank'}>Gabriel Soares</a> &#x2022; {new Date().getFullYear()}
            </p>
            <p>Você também pode se interessar em:</p>
            <ul className={`list-unstyled d-flex justify-content-center gap-3 ${style.others}`}>
                <li>
                    <a href="http://www.savewalterwhite.com" target="_blank">
                        <img src={"./src/assets/images/SaveWalterWhite.png"} alt="Save Walter White" title="Save Walter White" />
                    </a>
                </li>
                <li>
                    <a href="http://www.lphishiring.com" target="_blank">
                        <img src={"./src/assets/images/LosPollosHermanos.png"} alt="Los Pollos Hermanos" title="Los Pollos Hermanos" />
                    </a>
                </li>
                <li></li>
            </ul>
        </footer>
    )
}