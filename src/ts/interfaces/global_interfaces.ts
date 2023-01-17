import { LogInValidation } from "../types/global_types";

export interface DbContent{
    [key: string]: string | number;
}

export interface Track {
    artist: string;
    song: string;
}

export interface Errors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export interface formObject {
    form: LogInValidation;
    errors: Errors;
    loading: boolean;
    response: boolean | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleBlur: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}