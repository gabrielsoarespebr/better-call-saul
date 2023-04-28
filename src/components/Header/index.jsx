import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './style.module.css';
import saulLogo from '../../assets/images/BetterCallSaulLogo.png';
import saulArt from '../../assets/images/SaulGoodmanArt.png';

export const Header = () => {
    return (
        <header className="d-flex justify-content-around">
            <img className={`col-3 col-sm-5 ms-3 my-3 my-sm-0 ${style.logo}`} src={saulLogo} alt="Better Call Saul Logo" />
            <img className="col-5" src={saulArt} alt="Saul Goodman Art" />

            <Navbar expand="xl">
                <Container className='p-0'>
                    <Navbar.Toggle className={`${style.navIcon}`} aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fw-bold">
                            <Nav.Link href="#about" className='p-0'>Sobre</Nav.Link>
                            <Nav.Link href="#attest" className='p-0'>Depoimentos</Nav.Link>
                            <Nav.Link href="#contact" className='p-0'>Contato</Nav.Link>
                            <Nav.Link href="#gallery" className='p-0'>Galeria</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}