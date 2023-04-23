import React from 'react';
import styled from "styled-components";

function Signin() {
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
        a{          
            width: 225px;
            text-align: center;
            display: inline-block;
            text-decoration: none;
            margin: 20px 0px;
            padding: 10px 0px;
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

    return (
        <Container>
            <Main>
                {/* ここからSigninのエリア */}
                <FormBackground>
                    <FormContainer>
                        <EmailInput>
                            <input type="email" placeholder='email' />
                        </EmailInput>
                        <PasswordInput>
                            <input type="password" placeholder='passward' />
                        </PasswordInput>
                        <SigninButton>
                            <a href="#">Signin</a>
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