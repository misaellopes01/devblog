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

export class User {
  private props: UserProps;

  constructor(props: Replace<UserProps, { createdAt?: Date }>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public set role(role: Role) {
    this.props.role = role;
  }

  public get role(): Role {
    return this.props.role;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
