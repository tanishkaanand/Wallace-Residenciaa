import { FaBeer } from 'react-icons/fa';

import { TbBath } from "react-icons/tb";
import { AiOutlineDesktop, AiOutlineWifi, AiFillBell, AiFillCar, AiOutlineCoffee} from "react-icons/ai";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, {useState,useEffect} from 'react';

function Room(props) {

    const [TOKEN, setToken] = useState([]);

    function getToken() {
        setToken(JSON.parse(localStorage.getItem('TOKEN')));
    }

    useEffect( () => getToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [] );

    var list = props.UTILITIES;

    function callSwitch(item){
        let ANS = null;
        switch(item) {
            case 1: 
                ANS =  (<div key='AiOutlineDesktop1' className='ICON'>
                        <AiOutlineDesktop  />
                    </div>
                );
            break;

            case 2: 
                ANS =  (<div key='AiOutlineWifi2' className='ICON'>
                        <AiOutlineWifi  />
                    </div>
                );
            break;

            case 3: 
                ANS =  (<div key='AiFillBell3' className='ICON'>
                            <AiFillBell />
                    </div>
                );
            break;

            case 4: 
                ANS =  (<div key='AiFillCar4' className='ICON'>
                            <AiFillCar />
                    </div>
                );
            break;

            case 5: 
                ANS =  (<div key='AiOutlineCoffee5' className='ICON'>
                        <AiOutlineCoffee />
                    </div>
                );
            break;

            case 6:
                ANS =  (<div key='TbBath6' className='ICON'>
                            <TbBath />
                        </div>
                );
            break;

            default: 
                ANS =  (<div key='FaBeer7' className='ICON'>
                            <FaBeer />
                        </div>
                );
            
        }
        return ANS;
    }

    function handleBookClick() {
        localStorage.setItem('BOOK_TITLE', props.TITLE);    
    }
 
    return (
        <div className="SingleCardBox">
            <Container className=''>
                <Row className='SingleCard'>
                    <Col className='' style={{padding:'0',margin:'0'}}>
                        <img className='RoomImage' alt='Room' src={props.IMG}/>
                    </Col>
                    <Col className='RoomText'>
                        <Row>
                        
                            <h3><br/> <br/>{props.TITLE}</h3>
                            <h6>{props.VOL}</h6><h6>{props.CAPACITY}</h6>
                        </Row>

                        <Row>
                            <p>{props.BODY}</p> 
                        </Row>

                        <Row>
                            <h5 className='IconsList'>
                            { list && list.length>0 && list.map((item)=> (
                                callSwitch(item)
                            ) ) }
                            </h5>

                            <h6>
                            ₹ {props.PRICE} / night
                            </h6>
                        </Row>

                        <Row>
                        {
                            TOKEN === null?
                            <a href='/login'><button className='BookBTN'>BOOK</button></a>
                            : 
                            <a href='/bookingform' onClick={handleBookClick}><button className='BookBTN'>BOOK</button></a>
                        }
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Room;