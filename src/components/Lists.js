import React from 'react'
import './css/lists.css'
import astro_logo from './images/Astro_logo.png'
import banana_logo from './images/banana_logo.png'
import tick_logo from './images/tick_logo.png'
import imgbg from './images/lists_imgbg.png'
import { Container, Row, Col, ButtonGroup, Button, Table } from 'react-bootstrap'

const pStyle = {
    position: 'absolute',
    // width: '71px',
    // height: ' 37px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '28px',
    lineHeight: '34px',
    color: '#FFFFFF'
};

const spanStyle = {
    position: 'absolute',
    width: '101px',
    height: '22px',
    fontFamily: 'Sen',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '11px',
    lineHeight: '34px',
    color: '#2A76AD'
}

const arpStyle1 = {

    position: 'absolute',
    marginTop: '10px',
    fontFamily: 'Sen',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    color: '#FFFFFF',
    // width: 71px;
    // height: 37px;
    // left: 624px;
    // top: 956px;
    lineHeight: '19px'

}
const coreAndDetailsStyle = {
    position: 'absolute',
    fontFamily: 'Sen',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '15px',
    color: '#2A76AD',
    marginTop: '10px',
    lineHeight: '34px',

}
const coreAndDetailsStyle1 = {
    position: 'absolute',
    fontFamily: 'Sen',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '15px',
    color: '#2A76AD',
    marginTop: '10px',
    lineHeight: '34px',
    marginLeft:"-1.5rem"

}
const listsCardsStyle = {
    marginTop: '15%',
    left: '20%'
}
const btnGroupStyle = {
    position: 'absolute',
    width: '341px',
    height: '59px',
    // left: '292px',
    // top: '800px',
    color: 'white',
    background: '#14114F',
    borderRadius: '100px'
}
const cardStyle={
    marginRight: '2rem',
    marginTop: '1rem',
    marginBottom: '10vh'
}
const Lists = () => {
    return (
        <div classNAme="lists">
            <Container className="lists-container">
                <Row>
                    <Col>
                        <ButtonGroup aria-label="Basic example" className="btn-group" style={btnGroupStyle}>
                            <Container >
                                <Row>
                                    <Col><Button variant="secondary" className="btn1">Active</Button></Col>
                                    <Col> <Button variant="secondary" className="btn2">Inactivity</Button></Col>
                                </Row>


                            </Container>

                        </ButtonGroup>
                        {/* <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-secondary" className="btn-group">Left</button>
                            <button type="button" class="btn btn-secondary">Middle</button>
                            <button type="button" class="btn btn-secondary">Right</button>
                        </div> */}
                    </Col>
                </Row>
                <Row style={{ background: "#0F0230" }}>
                    <Col style={listsCardsStyle}>


                        <Row>
                            <Col className="lists-items">
                                <Row className="" style={cardStyle}>
                                <Col>
                                    <img src={imgbg} alt=""></img>
                                    <img src={astro_logo} style={{ marginLeft: "-4.7vw" }} alt="" />

                                </Col>
                                <Col className="lists-item"><p className="lists-card-title">Naut <br /> Pool</p></Col>
                                <Col className="lists-item"> <p style={pStyle}>0.000 <br /> <span style={spanStyle}>Naut Earned</span></p></Col>
                                <Col className="lists-item"><p style={arpStyle1}>126.51% <br /><span style={spanStyle}>Arp</span></p></Col>
                                <Col className="lists-item"><p style={arpStyle1}>0.00000 <br /><span style={spanStyle}>Arp</span></p></Col>
                                <Col className="lists-item"><p style={coreAndDetailsStyle}>Core</p></Col>
                                <Col className="lists-item"><p style={coreAndDetailsStyle}>Details</p></Col>
                                <Col className="lists-item"><Button className="lists-btn">Unlock Wallet</Button></Col>
                                </Row>
                                <Row className="lists-rows" style={cardStyle} >
                                <Col>
                                    <img src={imgbg} alt=""></img>
                                    <img src={banana_logo} style={{ marginLeft: "-4.7vw" }} alt="" />

                                </Col>
                                <Col className="lists-item"><p className="lists-card-title">Naut <br /> Pool</p></Col>
                                <Col className="lists-item"> <p style={pStyle}>0.000 <br /> <span style={spanStyle}>Naut Earned</span></p></Col>
                                <Col className="lists-item"><p style={arpStyle1}>126.51% <br /><span style={spanStyle}>Arp</span></p></Col>
                                <Col className="lists-item"><p style={arpStyle1}>0.00000 <br /><span style={spanStyle}>Arp</span></p></Col>
                                <Col className="lists-item"><p style={coreAndDetailsStyle1}>Core</p></Col>
                                <Col className="lists-item"><p style={coreAndDetailsStyle1}>Details</p></Col>
                                <Col className="lists-item"><Button className="lists-btn1">Unlock Wallet</Button></Col>
                                </Row>
                                <Row className="lists-rows" style={cardStyle} >
                                <Col>
                                    <img src={imgbg} alt=""></img>
                                    <img src={banana_logo} style={{ marginLeft: "-4.7vw" }} alt="" />
                                    <img src={tick_logo} style={{ marginLeft: "-3rem" , marginTop:"1.8vw" }} alt="" />

                                </Col>
                                <Col className="lists-item"><p className="lists-card-title">Naut <br /> Pool</p></Col>
                                <Col className="lists-item"> <p style={pStyle}>0.000 <br /> <span style={spanStyle}>Naut Earned</span></p></Col>
                                <Col className="lists-item"><p style={arpStyle1}>126.51% <br /><span style={spanStyle}>Arp</span></p></Col>
                                <Col className="lists-item"><p style={arpStyle1}>0.00000 <br /><span style={spanStyle}>Arp</span></p></Col>
                                <Col className="lists-item"><p style={coreAndDetailsStyle1}>Core</p></Col>
                                <Col className="lists-item"><p style={coreAndDetailsStyle1}>Details</p></Col>
                                <Col className="lists-item"><Button className="lists-btn1">Unlock Wallet</Button></Col>
                                </Row>

                                <Row className="lists-rows" style={cardStyle} >
                                <Col>
                                    <img src={imgbg} alt=""></img>
                                    <img src={tick_logo} style={{ marginLeft: "-4.7vw" }} alt="" />

                                </Col>
                                <Col className="lists-item"><p className="lists-card-title">Naut <br /> Pool</p></Col>
                                <Col className="lists-item"> <p style={pStyle}>0.000 <br /> <span style={spanStyle}>Naut Earned</span></p></Col>
                                <Col className="lists-item"><p style={arpStyle1}>126.51% <br /><span style={spanStyle}>Arp</span></p></Col>
                                <Col className="lists-item"><p style={arpStyle1}>0.00000 <br /><span style={spanStyle}>Arp</span></p></Col>
                                <Col className="lists-item"><p style={coreAndDetailsStyle1}>Core</p></Col>
                                <Col className="lists-item"><p style={coreAndDetailsStyle1}>Details</p></Col>
                                <Col className="lists-item"><Button className="lists-btn1">Unlock Wallet</Button></Col>
                                </Row>
                                
                            </Col>

                            
                        </Row>


                        {/* <Table className="lists-card" >
                            <Row>
                                <Col>
                                    <tr className="lists-items">
                                        <td >
                                            <img src={imgbg} alt=""></img>
                                            <img src={astro_logo} style={{ marginLeft: "-4.5vw" }} alt="" />

                                        </td>
                                        <td className="lists-item"><p className="lists-card-title">Naut <br /> Pool</p></td>
                                        <td className="lists-item"> <p style={pStyle}>0.000 <br /> <span style={spanStyle}>Naut Earned</span></p></td>
                                        <td className="lists-item"><p style={arpStyle1}>126.51% <br /><span style={spanStyle}>Arp</span></p></td>
                                        <td className="lists-item"><p style={arpStyle1}>0.00000 <br /><span style={spanStyle}>Arp</span></p></td>
                                        <td className="lists-item"><p style={coreAndDetailsStyle}>Core</p></td>
                                        <td className="lists-item"><p style={coreAndDetailsStyle}>Details</p></td>
                                        <td className="lists-item"><Button className="lists-btn">Unlock Wallet</Button></td>


                                    </tr>

                                </Col>
                            </Row>


                        </Table> */}



                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Lists
