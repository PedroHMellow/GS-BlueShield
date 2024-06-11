

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', 
});

export const register = async (username, password) => {
    return api.post('/register', { username, password });
};

export const login = async (username, password) => {
    return api.post('/login', { username, password });
};

export const validateToken = async (token) => {
    return api.get('/validate', {
        headers: { Authorization: token }
    });
};
