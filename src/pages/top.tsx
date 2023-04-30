import React, { useState } from 'react';
import styled from "styled-components";
import './top.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

function Top() {
    return (
        <div className="Top_Container">
            <header>
                <div className="header-back"></div>
            </header>
            <main>
                <div className="table-information-back">
                    <section className='table-information-container'>
                        <div className="table-search-back">
                            <div className="table-search-box">
                                <input type="search" placeholder="銘柄コードを検索" />
                            </div>
                            <div className="table-search-button">
                                <button>検索</button>
                            </div>
                        </div>
                        <table className="table-back">
                            <thead className='table-head'>
                                <tr>
                                    <th className="databox-top-left">銘柄コード</th>
                                    <th>名称</th>
                                    <th>終値</th>
                                    <th>利回り</th>
                                    <th>前日比</th>
                                    <th>購入時比</th>
                                    <th>保有銘柄数</th>
                                    <th className="databox-top-right">総額</th>
                                </tr>
                            </thead>
                            <tbody className='table-body'>
                                <tr className="table-body-row1">
                                    <th className='meigaracode'></th>
                                    <th className='meisyou'></th>
                                    <th className='owarine'></th>
                                    <th className='rimawari'></th>
                                    <th className='zennichihi'></th>
                                    <th className='kounyuujihi'></th>
                                    <th className='hoyuumeigasuu'></th>
                                    <th className='sougaku'></th>
                                </tr>
                                <tr className="table-body-row2">
                                    <th className='meigaracode'></th>
                                    <th className='meisyou'></th>
                                    <th className='owarine'></th>
                                    <th className='rimawari'></th>
                                    <th className='zennichihi'></th>
                                    <th className='kounyuujihi'></th>
                                    <th className='hoyuumeigasuu'></th>
                                    <th className='sougaku'></th>
                                </tr>
                                <tr className="table-body-row3">
                                    <th className='meigaracode'></th>
                                    <th className='meisyou'></th>
                                    <th className='owarine'></th>
                                    <th className='rimawari'></th>
                                    <th className='zennichihi'></th>
                                    <th className='kounyuujihi'></th>
                                    <th className='hoyuumeigasuu'></th>
                                    <th className='sougaku'></th>
                                </tr>
                                <tr className="table-body-row4">
                                    <th className='meigaracode'></th>
                                    <th className='meisyou'></th>
                                    <th className='owarine'></th>
                                    <th className='rimawari'></th>
                                    <th className='zennichihi'></th>
                                    <th className='kounyuujihi'></th>
                                    <th className='hoyuumeigasuu'></th>
                                    <th className='sougaku'></th>
                                </tr>
                                <tr className="table-body-row5">
                                    <th className='meigaracode'></th>
                                    <th className='meisyou'></th>
                                    <th className='owarine'></th>
                                    <th className='rimawari'></th>
                                    <th className='zennichihi'></th>
                                    <th className='kounyuujihi'></th>
                                    <th className='hoyuumeigasuu'></th>
                                    <th className='sougaku'></th>
                                </tr>
                                <tr className="table-body-row6">
                                    <th className='meigaracode databox-bottom-left'></th>
                                    <th className='meisyou'></th>
                                    <th className='owarine'></th>
                                    <th className='rimawari'></th>
                                    <th className='zennichihi'></th>
                                    <th className='kounyuujihi'></th>
                                    <th className='hoyuumeigasuu'></th>
                                    <th className='sougaku databox-bottom-right'></th>
                                </tr>
                            </tbody>
                        </table>
                        <div className="table-button-back">
                            <section className="button-left-back">
                                <div className="left-paging-button" onClick={() => console.log("back")}>
                                    <FontAwesomeIcon icon={faBackward} />
                                </div>
                            </section>
                            <section className="button-right-back">
                                <div className="right-paging-button" onClick={() => console.log("forward")}>
                                    <FontAwesomeIcon icon={faForward} />
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </main >
            <footer>
                <div className="footer-back">
                    <div className="top-copyright-back">
                        <section className="top-copyright">
                            <p><small>&copy; 2023 shinshi-onigoori</small></p>
                        </section>
                    </div>
                </div>
            </footer>
        </div >

    );

}

export default Top;