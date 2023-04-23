export type SigninRequest = {
    email: string
    password: string
}

export type SigninResponse = {
    message: string
    token: string
    displayName: string
}