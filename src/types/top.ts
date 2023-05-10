
export type HoldingStock = {
    code: string
    name: string
    close: number
    yield: number
    closeRatioFromPreviousDay: number
    closeRatioFromPurchaseDay: number
    holdingNumber: number
    totalAssetPlice: number
}

export const SAMPLE_HOLDING_STOCKS: HoldingStock[] = [
    {
        code: "7974",
        name: "任天堂",
        close: 5721,
        yield: 3.57,
        closeRatioFromPreviousDay: 1.65,
        closeRatioFromPurchaseDay: 0,
        holdingNumber: 100,
        totalAssetPlice: 572100,
    },
    {   code: "2432",
        name: "ディー・エヌ・エー",
        close: 1905,
        yield: 1.0,
        closeRatioFromPreviousDay: 2.31,
        closeRatioFromPurchaseDay: 0,
        holdingNumber: 100,
        totalAssetPlice: 190500,
    },
    {
        code: "7261",
        name: "マツダ",
        close: 1214,
        yield: 3.29,
        closeRatioFromPreviousDay: 3.41,
        closeRatioFromPurchaseDay: 0,
        holdingNumber: 100,
        totalAssetPlice: 121400,
    }
]