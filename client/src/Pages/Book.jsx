import React, { useEffect, useState } from 'react';

import { Form, Button } from "react-bootstrap";

import Room from "../Components/Room";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";


function nextDate(DATE) {
    if (DATE.d === 31
        && (
            DATE.m === 1 || DATE.m === 3 || DATE.m === 5 || DATE.m === 7 || DATE.m === 8 || DATE.m === 10 || DATE.m === 12
        )
    ) {
        DATE.d = 1;
        DATE.y = DATE.m === 12 ? DATE.y + 1 : DATE.y;
        DATE.m = DATE.m === 12 ? 1 : DATE.m + 1;
    } else if (
        DATE.d === 30
        && (
            DATE.m === 4 || DATE.m === 6 || DATE.m === 9 || DATE.m === 11
        )
    ) {
        DATE.d = 1;
        DATE.m = DATE.m + 1;
    } else if (
        DATE.d === 29
        && (
            DATE.m === 2
        )
    ) {
        DATE.d = 1;
        DATE.m = 3;
    } else if (
        DATE.d === 28 && DATE.m === 2
    ) {
        DATE.d = 1;
        DATE.m = 3;
    } else {
        DATE.d = DATE.d + 1;
    }

    let NEXT = DATE.y + '-' + DATE.m + '-' + DATE.d;

    return new Date(NEXT);
}

function Book() {
    const [renderRooms, setRooms] = useState([]);

    const [tmrwDate, setTmrwDate] = useState(new Date());

    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());

    async function handleClick(event) {
        event.preventDefault();

        let CD1 = new Date(event.target[0].value);
        let CD2 = new Date(event.target[1].value);

        localStorage.setItem('BOOK_CHECKIN', CD1)
        localStorage.setItem('BOOK_CHECKOUT', CD2)

        let ANS = null;
        let R1 = null, R2 = null, R3 = null, R4 = null;

        let SEND_TO_SERVER = {
            d1: CD1.getDate(),
            m1: (CD1.getMonth() + 1),
            y1: CD1.getFullYear(),
            d2: CD2.getDate(),
            m2: (CD2.getMonth() + 1),
            y2: CD2.getFullYear(),
        }

        console.log('IN THE FXN, DATE = ');
        console.log(SEND_TO_SERVER);

        await fetch('http://localhost:3001/counterbwdates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(SEND_TO_SERVER)
        })
            .then(response => response.json())
            .then(data => {
                console.log("TOKEN VALUE RECEIVED FROM SERVER")
                console.log(data)

                // SINGLE ROOM 
                R1 = data.hasSingleRoom === true ?
                    <Room
                        TITLE="Single Room"
                        IMG="/Images/singleroom.jpg"
                        VOL=""
                        CAPACITY=""
                        BODY="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                        UTILITIES={[1, 2, 3]}
                        PRICE={5000}
                    /> : null;
                // DOUBLE ROOM
                R2 = data.hasDoubleRoom === true ?
                    <Room
                        TITLE="Double Room"
                        IMG="/Images/doubleroom.jpg"
                        VOL=""
                        CAPACITY=""
                        BODY="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                        UTILITIES={[1, 2, 3, 4]}
                        PRICE={10000}
                    /> : null;
                // TWIN ROOM
                R3 = data.hasTwinRoom === true ?
                    <Room
                        TITLE="Twin Room"
                        IMG="/Images/twinroom.jpg"
                        VOL=""
                        CAPACITY=""
                        BODY="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                        UTILITIES={[1, 2, 3, 4, 5]}
                        PRICE={15000}
                    /> : null;
                // KING ROOM
                R4 = data.hasKingRoom === true ?
                    <Room
                        TITLE="King Room"
                        IMG="/Images/kingroom.jpg"
                        VOL=""
                        CAPACITY=""
                        BODY="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                        UTILITIES={[1, 2, 3, 4, 5, 6, 7]}
                        PRICE={20000}
                    /> : null;
            });

        ANS = <div className="RoomsContainer">
            {R1}
            {R2}
            {R3}
            {R4}
        </div>

        setRooms(ANS);
    }

    useEffect(() => {

        let todayDate = new Date();
        let todayDate2 = {
            d: todayDate.getDate(),
            m: todayDate.getMonth() + 1,
            y: todayDate.getFullYear()
        }

        let newDate = nextDate(todayDate2);
        let newDate2 = new Date(newDate.y + '-' + newDate.m + '-' + newDate.d);
        setTmrwDate(newDate2);

        setTmrwDate()

        let d = startDate1.getDate();
        let m = startDate1.getMonth() + 1;
        let y = startDate1.getFullYear();

        // ADDING 3 DAYS 
        if (d === 31
            && (
                m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12
            )
        ) {
            d = 5;
            y = m === 12 ? y + 1 : y;
            m = m === 12 ? 1 : m + 1;
        } else if (
            d === 30
            && (
                m === 4 || m === 6 || m === 9 || m === 11
            )
        ) {
            d = 5;
            m = m + 1;
        } else if (
            d === 29
            && (
                m === 2
            )
        ) {
            d = 5;
            m = 3;
        } else if (
            d === 28 && m === 2
        ) {
            d = 5;
            m = 3;
        } else {
            d = d + 5;
        }

        if (d < 10) {
            d = '0' + d;
        }

        if (m < 10) {
            m = '0' + m;
        }

        let DATE = y + '-' + m + '-' + d;

        console.log('\n+3 DATE = ');
        console.log(DATE);

        setMaxDate(new Date(DATE));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className=''>
            <h1 className="Center">Available Suits</h1>

            <div className="RoomsInputContainer">
                <Form
                    onSubmit={handleClick}
                >
                    <Container className="" >
                        <Row className="Center SingleCardBox RoomsInputBox">
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label className="label">Check-in</Form.Label>
                                    <DatePicker
                                        selected={startDate1}
                                        onChange={(date) => setStartDate1(date)}
                                        value={startDate1}
                                        required

                                        dateFormat={'y-MM-dd'}
                                        name="DATE1"

                                        closeOnScroll={true}

                                        minDate={tmrwDate}
                                        maxDate={maxDate}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label className="label">Check-out</Form.Label>
                                    <DatePicker
                                        selected={startDate2}
                                        value={startDate2}
                                        onChange={(date) => setStartDate2(date)}

                                        dateFormat={'y-MM-dd'}
                                        name="DATE2"

                                        closeOnScroll={true}

                                        minDate={tmrwDate}
                                        maxDate={maxDate}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={2}>

                                <Button
                                    className="SearchBtn"
                                    type="submit"
                                >Search</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </div>

            {renderRooms}
        </div>
    );
}

export default Book;