import { Replace } from 'src/helpers/Replace';
export type Role = 'ADMIN' | 'USER';
export interface UserProps {
    id?: string;
    name: string;
    email: string;
    password?: string;
    role?: Role;
    createdAt?: Date;
}
export declare class User {
    private props;
    constructor(props: Replace<UserProps, {
        createdAt?: Date;
    }>);
    get id(): string;
    set name(name: string);
    get name(): string;
    set email(email: string);
    get email(): string;
    set password(password: string);
    get password(): string;
    set role(role: Role);
    get role(): Role;
    get createdAt(): Date;
}
