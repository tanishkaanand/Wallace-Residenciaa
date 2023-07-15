import React from "react";

import LoginForm from "../Components/LoginForm"

function Login(){
    return(
        <div className='TextCenter'>
            <h1>Login</h1>
            <div className="">
                <div className="Center">
                    <div className="FitInSizedBox Center neonBox FormBox">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;