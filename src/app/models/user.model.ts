export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  passwordHash: string; // Nunca guarde a senha em texto plano!
  creationDate: Date;
}