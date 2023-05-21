import React, { FC, useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { Portfolio } from '../types/entity/portfolio';
import { UserContext } from '../context/UserContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { TableRow } from './components/tableRow';

const HomeContainer = styled.div`
    width: 100%;
    height: auto;
`;

const HeaderBack = styled.div`
    width: 100%;
    height: 148px;
    background-color: #4ADAE5;
`;

const TableInformationBack = styled.section`
    width: 100%;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
`;

const TableInformationContainer = styled.div`
    width: 100%;
    height: 650px;
`;

const TableSearchBack = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TableSearchBox = styled.div`
    width: fit-content;
    input{
        padding: 10px 20px;
        margin: 20px 0px;
        box-sizing: border-box;
        font-size: 18px;
        background-color: #f0f0f0;
        border-radius: 30px;
        border: 0;
    }
`;

const TableSearchButton = styled.div`
    width: fit-content;
    margin-left: 20px;
    button{
        width: 80px;
        height: 40px;
        border-radius: 30px;
        border: 0;
        color: #fff;
        background-color: #5AD1C0;
        transition: 0.5s;
        :hover{
            background-color: #38514D;
        }
    }
`;

const TableButtonBack = styled.div`
    width: auto;
    margin: 30px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonLeftBack = styled.section``;

const ButtonRightBack = styled.section`
    border-left: 2px solid #5AD1C0;
`;

const LeftPagingButton = styled.div`
    width: 60px;
    height: 60px;
    margin: 0px 30px;
    color: #5AD1C0;
    font-size: 2em;
    border-radius: 30px;
    border: 1px solid #5AD1C0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    :hover{
        color: #fff;
        background-color: #5AD1C0;
    }
`;

const RightPagingButton = styled.div`
    width: 60px;
    height: 60px;
    margin: 0px 30px;
    color: #5AD1C0;
    font-size: 2em;
    border-radius: 30px;
    border: 1px solid #5AD1C0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    :hover{
        color: #fff;
        background-color: #5AD1C0;
    }
`;

const FooterBack = styled.div`
    width: 100%;
    height: 250px;
    background-color: #38514D;
    box-sizing: border-box;
    position: relative;
`;

const HomeCopyrightBack = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
`;

const HomeCopyright = styled.section`
    width: fit-content;
    margin: auto;
    color: #fff;
`;

const TableBack = styled.table`
    width: auto;
    margin: auto;
    /* padding: 10px; */
    box-sizing: border-box;
    overflow: hidden;
    border-spacing: 0px;
    border: 1px solid #D1D1D1;
    border-radius: 20px;
    td, th{
        max-width: 140px;
        min-width: 115px;
        height: 50px;
    }
`;

const TableHead = styled.thead`
      color: #fff;
      th{
        background-color: #4ADAE5;
      }
`;

const TableBoby = styled.tbody`
      color: #707070;
`;


function Home() {
    const navigate = useNavigate()
    const userCtx = useContext(UserContext)
    const authCtx = useContext(AuthContext)
    const [tableRows, setTableRows] = useState<JSX.Element[] | JSX.Element>((<tr></tr>))

    useEffect(() => {
        if (!authCtx.token) {
            navigate("/signin")
        }
        const apiHost = "http://localhost:8080";
        const apiUrl = `${apiHost}/portfolio/${userCtx.user?.id}`;
        const apiRequest = {
            method: 'GET',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
                'Authorization': `Bearer ${authCtx.token}`
            },
        };
        fetch(apiUrl, apiRequest).then(response => response.json()).then(data => {
            const portfolio = data.portfolio as Portfolio[];
            if (portfolio) {
                setTableRows(portfolio.map((portfolio) => {
                    return (<TableRow key={portfolio.code} {...portfolio}></TableRow>)
                }))
            }
        })
    }, [authCtx.token, navigate, userCtx.user?.id]);

    return (
        <HomeContainer>
            <HeaderBack></HeaderBack>
            <TableInformationBack>
                <TableInformationContainer>
                    <TableSearchBack>
                        <TableSearchBox>
                            <input type="search" placeholder="銘柄コードを検索" />
                        </TableSearchBox>
                        <TableSearchButton>
                            <button onClick={() => console.log("search")}>検索</button>
                        </TableSearchButton>
                    </TableSearchBack>
                    <TableBack>
                        <TableHead>
                            <tr>
                                <th>銘柄コード</th>
                                <th>名称</th>
                                <th>終値</th>
                                <th>利回り</th>
                                <th>前日比</th>
                                <th>購入時比</th>
                                <th>銘柄保有数</th>
                                <th>総額</th>
                            </tr>
                        </TableHead>
                        <TableBoby>
                            {tableRows}
                        </TableBoby>
                    </TableBack>
                    <TableButtonBack>
                        <ButtonLeftBack>
                            <LeftPagingButton onClick={() => console.log("back")}>
                                <FontAwesomeIcon icon={faBackward} />
                            </LeftPagingButton>
                        </ButtonLeftBack>
                        <ButtonRightBack>
                            <RightPagingButton onClick={() => console.log("forward")}>
                                <FontAwesomeIcon icon={faForward} />
                            </RightPagingButton>
                        </ButtonRightBack>
                    </TableButtonBack>
                </TableInformationContainer>
            </TableInformationBack>


            <FooterBack>
                <HomeCopyrightBack>
                    <HomeCopyright>
                        <p><small>&copy; 2023 shinshi-onigoori</small></p>
                    </HomeCopyright>
                </HomeCopyrightBack>
            </FooterBack>
        </HomeContainer>

    );

}

export default Home;