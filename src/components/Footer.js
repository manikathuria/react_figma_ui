import React from 'react'
import './css/Footer.css'
import imgLink1 from './images/1.png'
import imgLink2 from './images/2.png'
import imgLink3 from './images/3.png'
import imgLink4 from './images/4.png'
import imgLink5 from './images/5.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import footerpng from './images/footerpng.png'
const Footer = () => {
    return (
        <div>
            <Container className="footer-container" >
                <Row className="footer-image" style={{marginTop:"2em"}}>
                    <Col><img src={footerpng} alt="" className="footer-logo" /></Col>
                </Row>
                <Row className="footer-content"> 
                    <Router>
                        <Col>
                            <Link className="footer-title" to="">Support</Link>
                            <div className="footer-section-title">
                                <Link to="/"  className="footer-links"> Whitepaper</Link><br/>
                                <Link to="/" className="footer-links" >Team</Link><br/>
                                <Link to="/" className="footer-links">News</Link><br />

                            </div>

                        </Col>
                        <Col>
                            <Link className="footer-title" to="">About</Link>
                            <div className="footer-section-title">
                                <Link to="/"  className="footer-links"> Docs</Link><br/>
                                <Link to="/" className="footer-links" >FAQ</Link><br/>
                                <Link to="/" className="footer-links">Privacy</Link><br />

                            </div>
                        </Col>
                        <Col xs={5} >
                        <p className="footer-title-col3">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Stay Updated</p>
                            
                            <div className="footer-social-links">
                                <Row   >
                               <Col className="footer-col"><Link to="/"  className="footer-img-links"> <img src={imgLink1} className="footer-images" alt=""/></Link></Col>
                               <Col className="footer-col"><Link to="/"  className="footer-img-links" > <img src={imgLink2} className="footer-images"  alt=""/></Link></Col>
                               <Col className="footer-col"><Link to="/"  className="footer-img-links " > <img src={imgLink3} className="footer-images"   alt=""/></Link></Col>
                               <Col className="footer-col"><Link to="/"  className="footer-img-links" > <img src={imgLink4} className="footer-images"  alt=""/></Link></Col>
                               <Col className="footer-col"><Link to="/"  className="footer-img-links" > <img src={imgLink5} className="footer-images"  alt=""/></Link></Col>
                                
                                </Row>
                            </div>
                            
                            <p className="footer-links" style={{marginTop:"5.3em"}}>Powered by the  Binance Smart Chain</p>
                        </Col>
                    </Router>

                </Row>
            </Container>
        </div>
    )
}

export default Footer
