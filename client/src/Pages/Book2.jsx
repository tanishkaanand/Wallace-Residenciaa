import React, { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Book2() {

    const [renderCounter, setCounter] = useState([]);

    const [startDate, setStartDate] = useState(new Date());

    async function checkRoomsAvailableOnThisDate(DATE) {

        let ANS = null;

        let CHECKINDATE = {
            d: DATE.getDate(),
            m: (DATE.getMonth() + 1),
            y: DATE.getFullYear()
        }

        console.log('IN THE FXN, DATE = ');
        console.log(CHECKINDATE);

        await fetch('http://localhost:3001/counterondate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(CHECKINDATE)
        })
            .then(response => response.json())
            .then(data => {
                console.log("TOKEN VALUE RECEIVED FROM SERVER")
                console.log(data)

                ANS = <
                    div className="Center SingleCardBox RoomsInputBox TextCenter"
                    style={{
                        width: '300px',
                        height: '300px',
                        fontSize: '1.2rem'
                    }}
                >
                    SINGLE ROOMS = {data.CounterSingleRoom} <br />
                    DOUBLE ROOMS = {data.CounterDoubleRoom} <br />
                    TWIN ROOMS = {data.CounterTwinRoom} <br />
                    KING ROOMS = {data.CounterKingRoom} <br />
                </div>
            });

        setCounter(ANS);
    }

    return (
        <div className="Center"
            style={{
                margin: '3% 7%'
            }}
        >
            <Container>
                <Row>
                    <Col>
                        <h1>ROOM COUNTER</h1>
                    </Col>
                    <Col>
                        <label>Date</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            value={startDate}
                            required
                            onSelect={(date) => {
                                checkRoomsAvailableOnThisDate(date);
                            }}

                            dateFormat={'y-MM-dd'}
                            name="DATE1"
                            isClearable
                            closeOnScroll={true}
                        />

                        {renderCounter}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Book2;