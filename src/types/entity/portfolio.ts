export type Portfolio = {
    code: string
    name: string
    close: number
    yield: number
    closeRatioFromPreviousDay: number
    closeRatioFromPurchaseDay: number
    holdingAmount: number
    totalAssetPrice: number
}