import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function BILL(){

    const [bill, setbill] = useState([]);
    
    useEffect( () => {
        setbill(JSON.parse(localStorage.getItem('BILL')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div className='TextCenter'>
            <h1 className="Center">BILL</h1>

            <Container style={{
                backgroundColor: 'white',
                color:'black',
                padding: '3% 7%'
            }} >
            <Row className="Center">
                <h3><small>PRICE = </small>₹ {
                    bill.RoomCategory === 'Single Room' ?
                        5000 :
                    bill.RoomCategory === 'Double Room' ?
                        10000:
                    bill.RoomCategory === 'Twin Room' ?
                        15000:
                    bill.RoomCategory === 'King Room' ?
                        20000:
                        12000
                } </h3>
                </Row>
                <Row>
                    <Col>
                        Occupant Name
                    </Col>
                    <Col>
                        {bill.Name}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Phone Number
                    </Col>
                    <Col>
                        {bill.PhoneNo}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Email 
                    </Col>
                    <Col>
                        {bill.Email}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Date Of Birth
                    </Col>
                    <Col>
                        {bill.DOB}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Address
                    </Col>
                    <Col>
                        {bill.Address}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Zip Code
                    </Col>
                    <Col>
                        {bill.ZipCode}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Nationality
                    </Col>
                    <Col>
                        {bill.Nationality}
                    </Col>
                </Row>
                <Row className="Center">
                    <h3>CREDIT CARD INFO</h3>
                </Row>
                <Row>
                    <Col>
                        Type
                    </Col>
                    <Col>
                        {bill.CreditType}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Holder
                    </Col>
                    <Col>
                        {bill.CreditHolder}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Number
                    </Col>
                    <Col>
                        {bill.CreditNumber}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Expiration 
                    </Col>
                    <Col>
                        {bill.CreditExpiration}
                    </Col>
                </Row>
                <Row className="Center">
                    <h3>BOOKING INFO</h3>
                </Row>
                <Row>
                    <Col>
                        Room Category
                    </Col>
                    <Col>
                        {bill.RoomCategory}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Check-In
                    </Col>
                    <Col>
                        {bill.CheckIn}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Check-Out
                    </Col>
                    <Col>
                        {bill.CheckOut}
                    </Col>
                </Row>
                
            </Container>

            
            <a href="/" onClick={() => {
                localStorage.removeItem('BILL');
            }}>
                <Button
                    className="SearchBtn"
                    type="submit"
                >
                    Back to Home
                </Button>
            </a>
        </div>
    );
}

export default BILL;