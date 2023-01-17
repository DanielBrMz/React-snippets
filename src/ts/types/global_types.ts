export type LogInValidation= {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export type IText = {
    [key: string]: string;
};

export type ModalHook = [boolean, ((e: React.MouseEvent<HTMLButtonElement>)=>void), ((e: React.MouseEvent<HTMLButtonElement>)=>void)];