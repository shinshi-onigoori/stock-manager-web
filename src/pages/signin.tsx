import React from 'react';
import "./signin.css"

function Signin() {
    return (
        <div className="signin_container">
            <div className="signin_main">
                {/* ここからSigninのエリア */}
                <div className="signin_block_back">
                    <section className="signin_block">
                        <div className="signin_Adress">
                            <input type="email" placeholder='email' />
                        </div>
                        <div className="signin_password">
                            <input type="password" placeholder='passward'/>
                        </div>
                        <div className="signin_button">
                            <a href="#">Signin</a>
                        </div>
                        <div className="move_signup_button">
                            <a href="#">Create New Account</a>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}
export default Signin;