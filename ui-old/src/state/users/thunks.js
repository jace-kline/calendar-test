import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api-client/api.js'

export const signup = createAsyncThunk(
    'users/signup',
    async (signupInfo, thunkAPI) => {
        try {
            const res = await api.users.signup(signupInfo);
            return res.data; // returns the user object
        } catch(err) {
            return err;
        }
    }
)

export const login = createAsyncThunk(
    'users/login',
    async (loginInfo, thunkAPI) => {
        try {
            const res = await api.users.login(loginInfo);
            return res.data; // returns the user object
        } catch(err) {
            return err;
        }
    }
)

export const logout = createAsyncThunk(
    'users/logout',
    async (user, thunkAPI) => {
        try {
            const res = await api.users.logout(user);
            return null; // returns null
        } catch(err) {
            return err;
        }
    }
)

