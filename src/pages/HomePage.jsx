import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/heroo.png";

import { OurMember, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const HomePage = () => {
    let navigate = useNavigate();

    return (
        <div className="homepage">
            <header id="home" className="w-100 min-vh-100 d-flex align-items-center">
                <Container>
                    <Row className="header-box d-flex align-items-center pt-lg-5">
                        <Col lg="6">
                            <h1 className="mb-4">
                                Hello Everyone! <br />It's Enhypen <span></span> <br /> My Favorite Group
                            </h1>
                            <p className="mb-4">Enhypen is My Favorite Korean group! They are very Handsome and Have Good Talent.
                                So on this website I want to share information about My Favorite Group.</p>
                            {/* <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">Lihat Kelas</button>
                            <button className="btn btn-outline-danger btn-lg rounded-1 me-2">Lihat Promo</button> */}
                        </Col>
                        <Col lg="6" className="pt-lg-0 pt -5">
                            <img src={HeroImage} alt="hero-img" /></Col>
                    </Row>
                </Container>
            </header>
            {/* Ini Our Member */}
            <div id="ourmember" className="ourmember w-100 min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center fw-bold">Our Member</h1>
                            <p className="text-center">So these are the members of Enhypen who are handsome and kind</p>
                        </Col>
                    </Row>
                    <Row>
                        {OurMember.map((ourmember) => {
                            return (
                                <Col key={ourmember.id} className="shadow rounded">
                                    <img src={ourmember.image} alt="unsplash.com" className="mb-5 rounded-top" />
                                    <h5>{ourmember.title}</h5>
                                    <div>
                                        <p className="fw-bold">{ourmember.posisi}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
            {/* ini about member */}
            <div id="aboutmember" className="aboutmember py-5">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center fw-bold my-5">About Member Enhypen</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },

                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {/* ini faq */}
                            {dataSwiper.map((data) => {
                                return (
                                    <SwiperSlide key={data.id} className="shadow-sn">
                                        <p className="desc">{data.desc}</p>
                                        <div id="faq" className="people">
                                            <img src={data.image} alt="" />
                                            <div>
                                                <h5 className="mb-1">{data.name}</h5>
                                                <p className="m-0 fw-bold">{data.panggilan}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Row>
                </Container>
            </div>
            {/* FAQ */}
            <FaqComponent />
        </div>
    )
};

export default HomePage;
