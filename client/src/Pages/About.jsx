import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){

    return(
        <div>
            <h1 className='TextCenter'>ABOUT</h1>

            <div 
            style={{
                backgroundColor:'white', 
                color:'black', 
                padding:'3%'
            }}>
                <Container className='ExploreBox'>
                    <Row>
                        <Col className='AboutCards'>
                            <h3>PASSPORT, VISA & VACCINATIONS</h3>
                            <h5>All persons are required to present a valid passport in order to enter South Africa. Passports must be valid for no less than 30 days after the end of your visit. An entry visa may be required by certain nationalities or in certain circumstances. For more up-to-date information on visa requirements, please click here.</h5>
                        </Col>
                        <Col className='AboutCards'>
                            <h3>WEATHER</h3>
                            <h5>Cape Town enjoys a four season Mediterranean climate with mild winters and warm summers: September–February (Spring/Summer) has an average temperature of 20°C/68°F; March–August (Autumn/Winter) has an average temperature of 17°C/63°F.</h5>
                        </Col>
                        <Col className='AboutCards'>
                            <h3>GDS CODES</h3>
                            <h5>Amadeus OOCPTOAO<br/>
                                Sabre OO105273<br/>
                                Galileo OO10911<br/>
                                Worldspan OOCPTOA<br/>
                                Pegasus OO23263<br/>
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='AboutCards'>
                            <h3>LANGUAGE</h3>
                            <h5>English is the primary language spoken in One&Only Cape Town, followed closely by Afrikaans.</h5>
                        </Col>
                        <Col className='AboutCards'>
                            <h3>CURRENCY</h3>
                            <h5>South African Rand is the official currency of South Africa.</h5>
                        </Col>
                        <Col className='AboutCards'>
                            <h3>INTERNET</h3>
                            <h5>Limited complimentary WiFi access is available throughout the resort.</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='AboutCards'>
                            <h3>TIME ZONE</h3>
                            <h5>Cape Town, South Africa is two (2) hours ahead of Greenwich Mean Time (GMT +2).</h5>
                        </Col>
                        <Col className='AboutCards'>
                            <h3>ELECTRICITY</h3>
                            <h5>Electricity is supplied at 220 volts. Adaptors are available.</h5>
                        </Col>
                        <Col className='AboutCards'>
                            <h3>CHECK-IN AND CHECK-OUT</h3>
                            <h5>Check-in is 2.00pm and check-out is 11.00am.</h5>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </div>
    );
}

export default About;