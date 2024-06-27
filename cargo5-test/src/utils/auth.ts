import axios from 'axios';

const BASE_URL = 'https://coreapp.cargofive.com/api';

export async function authenticate(): Promise<string> {
    const email = import.meta.env.VITE_EMAIL;
    const password = import.meta.env.VITE_PASSWORD;

    try {
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        });

        const token = response.data.token;
        console.log('Authenticated successfully, token:', token);
        return token;
    } catch (error) {
        console.error('Authentication failed:', error);
        throw error;
    }
}