import { Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate} from 'react-router-dom';

function BookingForm(props) {
    const navigate = useNavigate();

    const [valuePhone, setValuePhone] = useState();
    const [DOB, setDOB] = useState(new Date());
    const [expire, setExpire] = useState(new Date());

    async function handleBooking(event) {
        event.preventDefault();

        console.log("BILL --- EVENT");
        console.log(event);

        let SEND_TO_SERVER = {
            Name: event.target[0].value, 
            PhoneNo: event.target[2].value, 
            Email: event.target[3].value, 
            DOB: event.target[4].value, 
            Address: event.target[5].value, 
            ZipCode: event.target[6].value, 
            Nationality: event.target[7].value, 
            CreditType: event.target[8].value, 
            CreditHolder: event.target[9].value, 
            CreditNumber: event.target[10].value, 
            CreditExpiration: event.target[11].value,
            RoomCategory: localStorage.getItem('BOOK_TITLE'),
            CheckIn: new Date(localStorage.getItem('BOOK_CHECKIN')),
            CheckOut: new Date(localStorage.getItem('BOOK_CHECKIN'))
        }

        localStorage.removeItem('BOOK_TITLE');
        localStorage.removeItem('BOOK_CHECKIN');
        localStorage.removeItem('BOOK_CHECKIN');

        console.log("\nSENDING....");
        console.log(JSON.stringify(SEND_TO_SERVER));

        await fetch('http://localhost:3001/book', {  
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(SEND_TO_SERVER)
        })
        localStorage.setItem('BILL',JSON.stringify(SEND_TO_SERVER));
        navigate('/bill');
    }

    return(
        <div>
            <h1 className="Center">FILL</h1>

            <div className="Center">
            <div className="Center FormContainer" style={{width:'600px', height:'1400px'}}>
                <Form 
                    onSubmit={handleBooking}
                    className="" style={{color:"#48466D"}}
                >

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Occupant Name</Form.Label>
                        <Form.Control className="" type="text" name="Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoneNo">
                        <Form.Label className="">Phone Number</Form.Label>
                        <PhoneInput
                            minLength="9" maxLength="10"
                            defaultCountry="IN"
                            value={valuePhone}
                            onChange={setValuePhone}
                            name="PhoneNo" required 
                            className=""
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Email ID</Form.Label>
                        <Form.Control className="" type="text" name="Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Date Of Birth</Form.Label>
                        <DatePicker
                            selected={DOB}
                            onChange={(date) => setDOB(date)}
                            value={DOB}
                            required
                            dateFormat={'y-MM-dd'}
                            name="DOB"
                            closeOnScroll={true}
                            
                            // maxDate={new Date('2004-01-01')}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Address</Form.Label>
                        <Form.Control className="" type="text" name="Address" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Zip Code</Form.Label>
                        <Form.Control 
                            minLength="6" maxLength="6"
                            className="" type="number" 
                            name="ZipCode" required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Nationality</Form.Label>
                        <Form.Control className="" type="text" name="Nationality" required />
                    </Form.Group>

                    <br/><br/>
                    <h3 style={{fontSize:'20px'}}>CREDIT CARD INFORMATION</h3>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Type</Form.Label>
                        <Form.Control className="" type="text" name="CreditType" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Holder</Form.Label>
                        <Form.Control className="" type="text" name="CreditHolder" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Number</Form.Label>
                        <Form.Control className="" type="text" name="CreditNumber" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className="">Expiration</Form.Label>
                        <DatePicker
                            selected={expire}
                            onChange={(date) => setExpire(date)}
                            value={expire}
                            required
                            dateFormat={'y-MM-dd'}
                            name="CreditExpiration"
                            closeOnScroll={true}
                        />
                    </Form.Group>

                    <p>
                        Please Note: Rooms can not be confirmed without credit card information.
                        In case of no-show or late cancellation - 10 working days prior to arrival 
                        - you will be charged a fee corresponding to one night's room price.
                    </p>

                    <Button 
                    className="" variant="primary" 
                    type="submit"  style={{width:'400px'}}
                    >
                    PROCEED
                    </Button>
                    <br/>
                </Form>
            </div>
            </div>
        </div>
    );
}

export default BookingForm;