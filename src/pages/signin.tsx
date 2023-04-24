import React, { useState } from 'react';
import styled from "styled-components";
import { SigninRequest, SigninResponse } from '../types/signin';

const Container = styled.div`
        width: 100%;
        height: 100vh;
        box-sizing: border-box;
    `;

const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(156, 232, 255);
`;

const FormBackground = styled.div`
    max-width: 370px;
    min-width: 200px;
    width: 30%;
    height: 230px;
    padding: 40px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 10px;    
`;

const FormContainer = styled.section`
    text-align: center;
    box-sizing: border-box;
`;

const EmailInput = styled.div`
    input{
        padding: 10px;
        margin-top: 20px ;
        box-sizing: border-box;
        font-size: 18px;
        background-color: #f0f0f0;
        border: 0;
    }
`;

const PasswordInput = styled.div`
    input{
        padding: 10px;
        margin: 20px 0px;
        box-sizing: border-box;
        font-size: 18px;
        background-color: #f0f0f0;
        border: 0;
    }
`;

const SigninButton = styled.div`
    button{          
        width: 225px;
        display: inline-block;
        margin: 20px 0px;
        padding: 10px 0px;
        border: 0;
        color: #fff;
        background-color: rgb(0, 140, 255);
        border-radius: 30px;
        transition: 0.5s;
        
        :hover{
            background-color: #fff;
            border: 1px solid rgb(0, 140, 255);
            color: rgb(0, 140, 255);
        }
    }
`;

const SignupButton = styled.div`
    a{
        text-decoration: none;
        color: rgb(0, 140, 255);
        transition: 0.5s;

        :hover{
            color:rgb(0, 38, 255)
        }
    }
`;

async function handleClickSigninButton(emailInputed: string, passwordInputed: string) {
    const requestBody: SigninRequest = {
        email: emailInputed,
        password: passwordInputed
    }
    const apiHost = "http://localhost:8080";
    const apiUrl = `${apiHost}/auth/signin`;
    const apiRequest = {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(requestBody),
    };
    const response = await fetch(apiUrl, apiRequest);
    const data: SigninResponse = await response.json();
    console.log(data.message);
    console.log(data.token);
    console.log(data.displayName);
}

function handleChangeState(event: React.ChangeEvent<HTMLInputElement>, setStateFunction: React.Dispatch<React.SetStateAction<string>>) {
    setStateFunction(event.target.value);
}

function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container>
            <Main>
                {/* ここからSigninのエリア */}
                <FormBackground>
                    <FormContainer>
                        <EmailInput>
                            <input
                                type="email"
                                placeholder='email'
                                onChange={(event) => handleChangeState(event, setEmail)}
                                value={email} />
                        </EmailInput>
                        <PasswordInput>
                            <input
                                type="password"
                                placeholder='password'
                                onChange={(event) => handleChangeState(event, setPassword)}
                                value={password} />
                        </PasswordInput>
                        <SigninButton>
                            <button
                                onClick={() => handleClickSigninButton(email, password)}>
                                Signin
                            </button>
                        </SigninButton>
                        <SignupButton>
                            <a href="#">Create New Account</a>
                        </SignupButton>
                    </FormContainer>
                </FormBackground>
            </Main>
        </Container>
    );
}



export default Signin;