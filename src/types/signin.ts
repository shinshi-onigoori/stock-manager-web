// バックエンドに送るデータの型
export type SigninRequest = {
    email: string
    password: string
}

//バックエンドから返ってくるデータの型
export type SigninResponse = {
    message: string
    token: string
    displayName: string
}