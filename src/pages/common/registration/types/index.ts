// import { MouseEvent } from "react";

export type RegisterFunction = (e: React.FormEvent) => void;

// Props interface for the RegistrationPage component
export interface RegistrationPageProps {
    register: RegisterFunction;
}

export interface FormInput {
    full_name: string | null;
    e_mail: string | null;
    password: string | null;
    client_type: 'supplier' | 'customer' | null,
    profile_pic: File | null;
}



export interface LoginFormInput {
    e_mail: string;
    password: string;
    client_type: string;
}

export interface LoginPageProps {
    emailRef: React.MutableRefObject<HTMLInputElement | null>;
    passwordRef: React.MutableRefObject<HTMLInputElement | null>;
    clientRef: React.MutableRefObject<HTMLSelectElement | null>;
    onLogin: () => void;
}

export type LoginResponse = {
    client_type: string;
    token: string;
    registration_id: string;
}

export type LoginFunction = () => void;

