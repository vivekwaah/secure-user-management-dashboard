import { User } from "./userInterface";

export interface SignInCredentials {
	email: string;
	password: string;
}

export interface SignUpCredentials {
	email: string;
	password: string;
}

export interface SignUpResponse {
	id: string;
	token: string;
}

export interface SignInResponse {
	token: string;
}

export interface AuthState {
	token: string | null;
	userInfo: User | null,
	userId: string | number | null
}