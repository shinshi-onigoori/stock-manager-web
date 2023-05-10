import React, { FC, useState } from 'react';
import styled from "styled-components";
import { HoldingStock } from '../../types/top';

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

type StockTableProps = {
    holdingStocks: HoldingStock[]
}

const StockTable: FC<StockTableProps> = (props: StockTableProps) => {

    console.log(props.holdingStocks)

    return (
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
                {props.holdingStocks ? props.holdingStocks.map((holdingStock, index) => {
                    return (<TableRow key={index} {...holdingStock}></TableRow>)
                }) : <tr></tr>}
            </TableBoby>
        </TableBack>
    )
}

export default StockTable;

const Code = styled.td`
    background-color: #fff;
`;

const Name = styled.td`
    background-color: #F5F5F5;
`;

const Close = styled.td`
    background-color: #fff;
`;

const Yield = styled.td`
    background-color: #F5F5F5;
`;

const CloseRatioFromPreviuseDay = styled.td`
    background-color: #fff;
`;

const CloseRatioFromPurchaseDay = styled.td`
    background-color: #F5F5F5;
`;

const HoldingNumber = styled.td`
    background-color: #fff;
`;

const TotalAssetPlice = styled.td`
    background-color: #F5F5F5;
`;

const TableBodyRow = styled.tr`
    td{
        text-align: center;
        border-top: 0.25px solid #D1D1D1;
    }
    :first-child{
        td{
            border-top: none;
        }
    }
`;


type TableRowProp = HoldingStock

const TableRow: FC<TableRowProp> = (props: TableRowProp) => {
    console.log(props)
    return (
        <TableBodyRow>
                <Code>{props.code}</Code>
                <Name>{props.name}</Name>
                <Close>{props.close}</Close>
                <Yield>{props.yield}</Yield>
                <CloseRatioFromPreviuseDay>{props.closeRatioFromPreviousDay}</CloseRatioFromPreviuseDay>
                <CloseRatioFromPurchaseDay>{props.closeRatioFromPurchaseDay}</CloseRatioFromPurchaseDay>
                <HoldingNumber>{props.holdingNumber}</HoldingNumber>
                <TotalAssetPlice>{props.totalAssetPlice}</TotalAssetPlice>
        </TableBodyRow>
    )
}