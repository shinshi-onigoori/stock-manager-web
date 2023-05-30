import React, { FC } from 'react';
import styled from "styled-components";
import { Portfolio } from '../../types/entity/portfolio';

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


type TableRowProp = Portfolio;

export const TableRow: FC<TableRowProp> = (props: TableRowProp) => {
    console.log(props)
    return (
        <TableBodyRow>
            <Code>{props.code}</Code>
            <Name>{props.name}</Name>
            <Close>{Number(props.close).toFixed()}</Close>
            <Yield>{Number(props.yield).toFixed(2)}%</Yield>
            <CloseRatioFromPreviuseDay>{convertCloseRatioFormat(`${(Number(props.closeRatioFromPreviousDay) * 100).toFixed(2)}`)}</CloseRatioFromPreviuseDay>
            <CloseRatioFromPurchaseDay>{convertCloseRatioFormat(`${(Number(props.closeRatioFromPurchaseDay) * 100).toFixed(2)}`)}</CloseRatioFromPurchaseDay>
            <HoldingNumber>{props.holdingAmount}</HoldingNumber>
            <TotalAssetPlice>{props.totalAssetPrice}</TotalAssetPlice>
        </TableBodyRow>
    )
}


function convertCloseRatioFormat(closeRatio: number | string): string {
    console.log(closeRatio)
    let closeRatioNumber;
    if (typeof closeRatio === "string") {
        closeRatioNumber = Number(closeRatio);
    } else {
        closeRatioNumber = closeRatio;
    }

    const closeRatioDifference = closeRatioNumber - 100.00

    return (closeRatioDifference === 0) ? "± 0 %"
        : (closeRatioDifference > 0) ? `+ ${closeRatioDifference.toFixed(2)} %` : `- ${(100.00 - closeRatioNumber).toFixed(2)} %`
}