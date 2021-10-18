import axios from 'axios'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


export const loginUser = (token,user) =>({
    type:LOGIN,
    token,
    user
})

export const logoutUser = () =>({
    type:LOGOUT
})
