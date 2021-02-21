import { API_URL } from './apiConfig'
// import axios ??

// const fakeUser = {
//     id: 0,
//     firstName: 'John',
//     lastName: 'Smith',
//     email: 'johnsmith@gmail.com',
//     bio: ''
// }

export async function signup(userInfo) {
    setTimeout(() => {}, 3000);
    return { data: userInfo } ;
}

export async function login(loginInfo) {
    setTimeout(() => {}, 3000);
    return { data: loginInfo } ;
}

export async function logout(user) {
    setTimeout(() => {}, 3000);
    return { data: true };
}