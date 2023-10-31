import React, { InputHTMLAttributes, useRef } from 'react';
import classNames from 'classnames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean
}

export const Input = React.memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={cls.InputWrapper}>
            <input
                ref={ref}
                type={type}
                className={classNames(cls.input, className)}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                {...otherProps}
            />
        </div>

    );
});
