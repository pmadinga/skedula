import { Navbar, Container, Nav } from "react-bootstrap"
import style from './siteheader.module.css'

const SiteHeader = () =>{
    return(
        <div>
            <Navbar expand="lg" className={style.top_nav}>
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default SiteHeader;