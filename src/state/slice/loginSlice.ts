import { createSlice } from "@reduxjs/toolkit"

type loginType = {
    name?: string,
    isLoggedIn: true | false,
}

type loginStateType = {
    login: loginType,
}

const initialState: loginStateType = {
    login: {
        name: '',
        isLoggedIn: false
    },
}

const logInSlice = createSlice({
    name: 'logged',
    initialState,
    reducers: {
        logInUserReducer(state, action) {
            const stateLoggedIn = {
                ...state, login: {
                    name: action.payload.name,
                    isLoggedIn: action.payload.isLoggedIn
                }
            }
            return stateLoggedIn
        },
        logOutUserReducer() {
            return {
                login: {
                    name: "",
                    isLoggedIn: false
                }
            }
        }
    }
})


export type { loginType }
export default logInSlice.reducer
export const { logInUserReducer, logOutUserReducer } = logInSlice.actions