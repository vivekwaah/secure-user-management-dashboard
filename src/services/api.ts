import axios, { AxiosResponse } from 'axios';
import {
	SignInCredentials,
	SignInResponse,
	SignUpCredentials,
	SignUpResponse
} from '../interfaces/authInterface';
import { User } from '../interfaces/userInterface';

const BASE_URL = process.env.REACT_APP_BACKEND_API;

export async function signIn(credentials: SignInCredentials): Promise<AxiosResponse<SignInResponse>> {
	try {
		return await axios.post(`${BASE_URL}/login`, credentials);
	} catch (error) {
		throw new Error('Failed to sign in. Please check your credentials.');
	}
}

export async function signUp(credentials: SignUpCredentials): Promise<AxiosResponse<SignUpResponse>> {
	try {
		return await axios.post(`${BASE_URL}/register`, credentials);
	} catch (error) {
		throw new Error('Failed to sign up. Please try again later.');
	}
}

export async function getUserData(userId: number): Promise<AxiosResponse<User>> {
	try {
		return await axios.get(`${BASE_URL}/users/${userId}`);
	} catch (error) {
		throw new Error('Failed to fetch user data. Please try again later.');
	}
}
