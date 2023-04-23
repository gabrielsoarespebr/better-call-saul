import { LawService } from "../LawService";
import saulSide from '../../assets/images/SaulGoodmanSide.png';
import iconDivorce from '../../assets/icons/servicesDivorce.png';
import iconDamage from '../../assets/icons/servicesDamage.png';
import iconTaxes from '../../assets/icons/servicesTaxes.png';
import iconDrugs from '../../assets/icons/servicesDrugs.png';


export const About = () => {
    const emphasisText = {
        backgroundColor: 'var(--redLight)',
        color: 'var(--yellowLight)',
        textShadow: 'var(--blackShadow)',

        fontSize: '130%',
        padding: '.5%'
    };

    return (
        <section id="about" style={{ height: "100vh" }} className="d-flex justify-content-between gap-4">
            <img src={saulSide} alt="Saul Goodman" />
            <div style={{ fontSize: "110%" }} className="m-5 align-self-center">
                <h2 className="mb-4">Sobre Saul Goodman</h2>
                <p>Com a carreira jurídica iniciada na Defensoria Pública de Cook County, tornou-se conhecido pelo seu jeito eficaz e não convencional de advogar, visando <span style={emphasisText}>prevenção e reparação de danos</span>.</p>
                <p>Hoje, seu escritório é referência na arte de defender, com <span style={emphasisText}>experiência comprovada em diversas áreas do Direito</span> e atendimento a uma <span style={emphasisText}>vasta gama de clientes</span>, dos mais abastados aos menos favorecidos.</p>
                <p>Dentre os serviços mais procurados, destacam-se:</p>
                <ul style={{ height: "10vh" }} className="d-flex   list-unstyled">
                    <LawService serviceIcon={iconDivorce} serviceName="Divórcio" />
                    <LawService serviceIcon={iconDamage} serviceName="Dano moral e material" />
                    <LawService serviceIcon={iconDamage} serviceName="Questões fiscais" />
                    <LawService serviceIcon={iconDrugs} serviceName="Problemas com drogas" />

                </ul>
            </div>
        </section>
    )
}