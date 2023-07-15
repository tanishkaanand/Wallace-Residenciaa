import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Explore(){
    return(
        <div style={{backgroundColor:'white', color:'black', padding:'3%'}}>
            <h2>Explore...</h2>

            <Container className='ExploreBox'>
                <Row>
                    <Col className='ExploreCards'>
                        <img src='Images/img21.jpg' alt='Room'/>
                        <h3>Well Equipped Rooms</h3>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</h5>
                    </Col>
                    <Col className='ExploreCards'>
                        <img src='Images/image22.jpg' alt='Cusine'/>
                        <h3>Continental Cuisines</h3>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</h5>
                    </Col>
                    <Col className='ExploreCards'>
                        <img src='Images/image23.jpg' alt='Pool'/>
                        <h3>Grande Swimming Pool</h3>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Explore;