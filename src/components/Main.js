import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Graphic from './images/graphic1.png'
import Astro from './images/astro.png'
import './css/main.css'
const Main = () => {
    return (
        <div>
            <Container className="main-container">
                <Row >
                    <Col className="main-content">
                        <img src={Astro} alt="" />
                        <p className="main-title">FIESTA</p>
                        <p  className="main-content-data">
                            Stake NAUT to earn new tokens.
                            You can unstake at any time.
                            Rewards are calculated per block.
                        </p>
                    </Col>
                    <Col >
                        <img src={Graphic} style={{marginTop:"6%" , marginLeft:"-10%"}} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main
