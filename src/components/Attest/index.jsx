import { useEffect, useState } from "react";
import style from "./style.module.css"
import { Carousel } from "react-bootstrap";

export const Attest = () => {
    const [people, setPeople] = useState([]);

    async function fetchPeople() {
        const response = await fetch("https://mocki.io/v1/73df076f-29e9-49aa-b838-426fc4d99ebb");
        setPeople(await response.json());
    }

    useEffect(() => { fetchPeople() }, []);

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