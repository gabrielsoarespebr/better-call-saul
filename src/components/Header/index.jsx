import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './style.module.css';
import saulLogo from '../../assets/images/BetterCallSaulLogo.png';
import saulArt from '../../assets/images/SaulGoodmanArt.png';

export const Header = () => {
    return (
        <header className="d-flex justify-content-around">
            <img className={`col-5 ms-3 ${style.logo}`} src={saulLogo} alt="Better Call Saul Logo" />
            <img className="col-5" src={saulArt} alt="Saul Goodman Art" />

            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle className={`${style.navIcon}`} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fw-bold">
                            <Nav.Link href="#about">Sobre</Nav.Link>
                            <Nav.Link href="#attest">Depoimentos</Nav.Link>
                            <Nav.Link href="#contact">Contato</Nav.Link>
                            <Nav.Link href="#gallery">Galeria</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}