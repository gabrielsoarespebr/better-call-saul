import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import style from "./style.module.css"
export const Header = () => {
    return (
        <header className="d-flex justify-content-around">
            <img className={`col-5 ms-3 ${style.logo}`} src={"./src/assets/images/BetterCallSaulLogo.png"} alt="Better Call Saul Logo" />
            <img className="col-5" src={"./src/assets/images/SaulGoodmanArt.png"} alt="Saul Goodman Art" />

            <Navbar expand="lg">
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle className='bg-danger border-3 border-dark' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}