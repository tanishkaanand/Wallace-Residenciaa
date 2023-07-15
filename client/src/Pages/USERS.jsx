import { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function USERS() {

    const [list, setlist] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => setlist(data))
    }, [] );

    function handleClick(username) {
        fetch(`/users/deletion?username=${encodeURIComponent(username)}`)
          .then(response => response.json())
          .then(state => this.setState(state));
        window.location.reload(false);      //to refresh the page
    }

    return(
        <div>
            <h1 className="Center">USERS</h1>

            <Container className="ul">
                {
                    list && list.length>0 && list.map((ONE) => (
                        <Row className="li">
                            <Col>USERNAME :  {ONE.Username} </Col>
                            <Col>PHONE NO :  {ONE.PhoneNo}  </Col>
                            <Col>EMAIL    :  {ONE.Email}    </Col>

                            <Col xs={1}>
                            <button 
                                onClick={() => handleClick(ONE.Username)} 
                                className="CircularBtn TopRight"
                            >
                            X
                            </button>
                            </Col>
                        </Row>
                    ))
                }
            </Container>
        </div>
    );
}

