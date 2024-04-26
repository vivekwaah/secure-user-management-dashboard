import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://reqres.in/api';

export interface SignInCredentials {
	email: string;
	password: string;
}

export interface SignUpCredentials {
	email: string;
	password: string;
}

export interface SignUpResponse {
	id: string,
	token: string;
}

export interface UserData {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export async function signIn(credentials: SignInCredentials) {
	try {
		return await axios.post(`${BASE_URL}/login`, credentials);
	} catch (error) {
		throw new Error('Failed to sign in. Please check your credentials.');
	}
}

export async function signUp(credentials: SignUpCredentials) {
	try {
		return await axios.post(`${BASE_URL}/register`, credentials);
	} catch (error) {
		throw new Error('Failed to sign up. Please try again later.');
	}
}

export async function getUserData(userId: number) {
	try {
		const response = await axios.get(`${BASE_URL}/users/${userId}`);
		return response.data;
	} catch (error) {
		throw new Error('Failed to fetch user data. Please try again later.');
	}
}
