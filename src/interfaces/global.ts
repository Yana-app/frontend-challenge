export interface User {
  id: string;
  name: string;
  email: string;
}

export interface IMessage {
  id: string;
  message: string;
  isPrimary: boolean;
  time?: string;
}

export type MessageByUser = string;

export interface UserSchema {
  name: string;
  email: string;
  password: string;
}
