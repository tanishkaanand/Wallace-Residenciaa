import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Greeting(){
    return(
        <div className="Greeting Relative">
        <img alt='circle' className='CircleImg' src='Images/circle2.png'/>
            <Container className='WhiteBox'>
                <Row className='Row Center'>
                    <Col><h1>WALLACE<br/> RESIDENCIA</h1></Col>
                </Row>
                <Row className='Row'>
                    <Col className='Col'>
                        <img src="Images/boat.png" alt="boat"/>
                    </Col>
                    <Col className='Col'>
                        <img src="Images/bache.png" alt="fun"/>
                    </Col>
                </Row>
            </Container> 
        </div>
    );
}

export default Greeting;