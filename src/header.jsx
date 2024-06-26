import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { useState } from "react"
import "./header.css"
import ThemeButton from "./components/ThemeButton/ThemeButton"
import Sidebar from "./components/icons/Sidebar"
import BoxArrow from "./components/icons/BoxArrow"
import { Link } from "react-router-dom"

export default function Header() {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container className="p-0 mr-0 ml-0 mt-0 fixed-top header" fluid >
            <Row style={{ height: "70px", marginLeft: "0px", marginRight: "0px", minWidth: "250px" }} className="px-3">
                <Col md={1} sm={1} xs={2} className="d-lg-none p-0">
                    <button onClick={handleShow} className="theme-button rounded" >
                        <Sidebar />
                    </button>
                    <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "#1f2328", color: "#FFFFFF" }} responsive="lg">
                        <Offcanvas.Header closeButton style={{ paddingTop: "5px" }} className="border-bottom" closeVariant="white">
                            <Offcanvas.Title> <Link to='/' onClick={handleClose}>Task Manager </Link> <span onClick={handleClose}><ThemeButton/> </span> </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul className="ul-header">
                                <Link to='about' onClick={handleClose}>
                                    <li className="rounded">
                                        Sobre
                                    </ li>
                                </Link>
                                <Link to='browse/search' onClick={handleClose}>
                                    <li className="rounded">
                                        Pesquisar livros
                                    </ li>
                                </Link>
                                <Link to='browse/filter' onClick={handleClose}>
                                    <li className="rounded">
                                        Filtros
                                    </ li>
                                </Link>
                                <a href="https://github.com/EdgarLiraa/book_api" target="blank" onClick={handleClose}>
                                    <li className="rounded">
                                        Github <BoxArrow size={14} />
                                    </li>
                                </a>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
                <Col lg={3} md={4} sm={4} xs={10} className="p-0 mt-3 text-start">
                    <Container className="m-0 mt-2 p-0">
                        <h3> <span className="header-text"> <Link to="/">LivrosFinder </Link> </span> </h3>
                    </Container>
                </Col>
                <Col lg={2} className="d-none d-lg-block text-start p-0 mt-3">
                    <Container className="m-0 mt-2 p-0">
                        <h3> <span className="header-text"><Link to="/about">Sobre  </Link></span></h3>
                    </Container>
                </Col>
                <Col lg={1} className="d-none d-lg-block text-start p-0 mt-3">
                    <Container className="m-0 mt-2 p-0">
                        <h3> <span className="header-text"><Link to="/browse">Buscar </Link> </span> </h3>
                    </Container>
                </Col>
                <Col lg={3} className="d-none d-lg-block text-start p-0 mt-3" />
                <Col lg={2} className="d-none d-lg-block text-end p-0 mt-3">
                    <span className="header-text w-auto">
                        <a href="https://github.com/EdgarLiraa/book_api" target="blank">
                            <Row className="m-0 p-0 mt-2">
                                <Col lg={8} className="text-end px-2">

                                    <h3>Github</h3>

                                </Col>
                                <Col lg={4} className="text-start p-0 mt-1">
                                    <BoxArrow size={20} />
                                </Col>
                            </Row>
                        </a>
                    </span>
                </Col>
                <Col lg={1} className="d-none d-lg-block text-start">
                    <ThemeButton />
                </Col>
            </Row>
        </Container>
    )
}