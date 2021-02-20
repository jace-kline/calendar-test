import { API_URL } from './apiConfig'
// import axios ??

const fakeUser = {
    id: 0,
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@gmail.com',
    bio: ''
}

export async function signup(userInfo) {
    return { data: fakeUser} ;
}

export async function login(loginInfo) {
    return { data: fakeUser} ;
}

export async function logout(user) {
    return { data: true };
}