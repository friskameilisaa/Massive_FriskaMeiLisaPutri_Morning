import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
    return (
        <div className="footer py-5">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col lg="5">
                        <h3 className="fw-bold">Enhypen</h3>

                    </Col>
                    <Col className="d-flex flex-column">
                        <h5 className="fw-bold">Menu</h5>
                        <Link to="">Home</Link>
                        <Link to="ourmember">Our Member</Link>
                        <Link to="aboutmember">About Member</Link>
                        <Link to="faq">FAQ</Link>
                    </Col>
                    <Col lg="4" className="mt-lg-0 mt-5">
                        <h5 className="fw-bold mb-3">Tertarik Gak Nih Sama Enhypen ?</h5>
                        <div className="kirim">
                            <input type="text" placeholder="Tertarik.." />
                            <button className="btn btn-danger rounded-end rounded-0">Kirim</button>
                        </div>
                        <div className="social mt-3">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>&copy; Copyright 2023 by Friska Mei Lisa
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default FooterComponent;
