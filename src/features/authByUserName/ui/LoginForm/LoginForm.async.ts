import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

// @ts-ignore
const LoginFormLazy = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));

export default LoginFormLazy;
