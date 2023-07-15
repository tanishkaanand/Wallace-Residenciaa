import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from "./Pages/Home";
import About from './Pages/About';
import Login from './Pages/Login';
import Book from './Pages/Book';
import Book2 from './Pages/Book2';
import Rooms from './Pages/Rooms';
import SignUp from './Pages/SignUp';
import BookingForm from './Pages/BookingForm';
import USERS from './Pages/USERS';
import BILL from './Pages/BILL';

function App(props) {

    const [TOKEN, setToken] = useState([]);

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('TOKEN')));

        console.log('APP RECEIVES TOKEN');
        console.log(TOKEN)
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);

    return (
        <div className='App'>
            <Header />
            <Router>
                
                <Routes>
                    <Route exact path='/' element={<Home TOKEN={TOKEN} />} />

                    {
                        TOKEN === null ?
                            <Route path='/book' element={<Book />} />
                            :
                            TOKEN.isAdmin === true ?
                                <Route path='/book' element={<Book2 />} />
                                :
                                <Route path='/book' element={<Book />} />
                    }

                    
                    <Route path='/rooms' element={<Rooms />} />
                    <Route path='/users' element={<USERS />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login TOKEN={TOKEN} />} />
                    <Route path='/signup' element={<SignUp TOKEN={TOKEN} />} />
                    <Route path='/bookingform' element={<BookingForm />} />
                    <Route path='/bill' element={<BILL />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;