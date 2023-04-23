import style from "./style.module.css"
import { Carousel } from "react-bootstrap";

export const Attest = () => {
    const people = [
        { name: "Wendy", attest: "Conheci Saul Goodman quando precisei de um advogado para lidar com alguns problemas legais. Eu estava em apuros, sabe? Mas logo percebi que estava nas mãos de um advogado experiente e comprometido. Saul fez tudo o que pôde para me ajudar. Ele é um profissional excepcional e eu sou grata por tudo o que ele fez por mim.", photo: "./src/assets/images/AttestWendy.png" },
        { name: "Badger", attest: "Nunca pensei que precisaria de um advogado, mas quando eu fui preso em um desentendimento da Narcóticos, sabia que precisava de alguém que entendesse do assunto. Foi então que conheci o Saul, um advogado experiente que sabia exatamente o que fazer. Ele me ajudou a sair dessa situação e eu nunca vou esquecer disso.", photo: "./src/assets/images/AttestBadger.png" },
        { name: "Ted Beneke", attest: "Eu tive a sorte de ter Saul Goodman como meu advogado em um momento muito difícil. Ele é um advogado astuto e criativo, que conhece a lei e sabe como usá-la em benefício do cliente. Ele me ajudou a sair de uma situação complicada e me guiou durante todo o processo. Eu confiei nele completamente e ele entregou o que prometeu.", photo: "./src/assets/images/AttestTedBeneke.png" },
        { name: "Huell", attest: "Saul me deu uma segunda chance na vida. Ele é inteligente, dedicado e sabe como defender seus clientes com habilidade e estratégia. Eu devo minha liberdade a ele e sempre serei grato por tudo que ele fez por mim. Se você estiver procurando por um advogado de defesa, sua procura acabou, pois Saul Goodman é a escolha certa.", photo: "./src/assets/images/AttestHuell.png" },
        { name: "Joe", attest: "Eu já vi muitos advogados em minha vida, mas nenhum tão bom quanto Saul Goodman. Ele sempre consegue encontrar uma saída para as situações mais difíceis. Se você precisar de ajuda legal, eu recomendo fortemente que você ligue para Saul Goodman. Ele é um cara que realmente sabe como fazer as coisas acontecerem.", photo: "./src/assets/images/AttestJoe.png" }
    ]

    return (
        <Carousel id="attest" className={style.carousel}>
            {people.map((person, key) => {
                return <Carousel.Item key={key}>
                    <img
                        src={person.photo}
                        alt={person.name}
                    />
                    <Carousel.Caption className="position-static">
                        <h3>{person.name}</h3>
                        <p className="col-7 m-auto">{person.attest}</p>
                    </Carousel.Caption>
                </Carousel.Item>

            })}

        </Carousel>
    )
}