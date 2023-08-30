import React, { FC } from 'react'
import cls from './Button.module.scss'
import classNames from 'classnames'

export enum ThemeButton {
    CLEAR = 'clear',
}


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.Button, cls[theme], className)} {...otherProps}>
            {children}
        </button>
    )
}