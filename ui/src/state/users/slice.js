import { createSlice } from '@reduxjs/toolkit'
import { signup, login, logout } from './thunks'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        currentUser: null,
        isPending: false,
        isError: false,
        error: ''
    },
    reducers: {},
    extraReducers: {
        [signup.pending]: (state, action) => ({
            currentUser: null,
            isPending: true,
            isError: false,
            error: ''
        }),
        [login.pending]: (state, action) => ({
            currentUser: null,
            isPending: true,
            isError: false,
            error: ''
        }),
        [logout.pending]: (state, action) => ({
            ...state,
            isPending: true,
            isError: false,
            error: ''
        }),
        [signup.rejected]: (state, action) => ({
            currentUser: null,
            isPending: false,
            isError: true,
            error: action.error.message
        }),
        [login.rejected]: (state, action) => ({
            currentUser: null,
            isPending: false,
            isError: true,
            error: action.error.message
        }),
        [logout.rejected]: (state, action) => ({
            ...state,
            isPending: false,
            isError: true,
            error: action.error.message
        }),
        [signup.fulfilled]: (state, action) => ({
            currentUser: action.payload,
            isPending: false,
            isError: false,
            error: ''
        }),
        [login.fulfilled]: (state, action) => ({
            currentUser: action.payload,
            isPending: false,
            isError: false,
            error: ''
        }),
        [logout.fulfilled]: (state, action) => ({
            currentUser: null,
            isPending: false,
            isError: false,
            error: ''
        }),
    }
})