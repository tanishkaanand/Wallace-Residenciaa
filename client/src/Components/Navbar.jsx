import NavSingle from "./NavSingle";
import React, {useState,useEffect} from 'react';
// import { redirect } from "react-router-dom";
import Logout from "./Logout";

function Navbar(props){

    const [ROOMSPAGE, setROOMSPAGE] = React.useState(null);
    const [TOKEN, setToken] = useState([]);

    function getToken() {
        setToken(JSON.parse(localStorage.getItem('TOKEN')));

        console.log('NAVBAR RECEIVES TOKEN');
        console.log(TOKEN)

        let ANS = ((TOKEN & TOKEN.isAdmin===true )? 
        <NavSingle Title="Rooms" URL="/rooms" />
        : null);

        console.log(ANS);

        setROOMSPAGE(ANS);
    }

    useEffect( () => getToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [] );

    return(
        <div className="">
            <nav>
                <NavSingle URL="/" Title="Home"/>
                <NavSingle URL="/book" Title="Book"/>


                {
                    TOKEN===null? 
                    null:
                    TOKEN.isAdmin===true ?
                    <NavSingle Title="Rooms" URL="/rooms" />
                    : null
                }

                {
                    TOKEN===null? 
                    null:
                    TOKEN.isAdmin===true ?
                    <NavSingle Title="Users" URL="/users" />
                    : null
                }

                {ROOMSPAGE}

                <NavSingle URL="/about" Title="About"/>
                
                {
                    TOKEN === null ?
                    <NavSingle Title="Login" URL="/login" />
                    : 
                    <Logout/>
                }
            </nav>
        </div>
    );
}

export default Navbar;