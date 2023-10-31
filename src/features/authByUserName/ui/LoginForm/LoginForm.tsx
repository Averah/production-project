import React, { FC } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, className)}>
            <Input
                autoFocus
                type="text"
                className={cls.input}
                placeholder={t('Введите логин')}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <Button className={cls.loginBtn} theme={ButtonTheme.OUTLINE}>
                {t('Войти')}
            </Button>
        </div>
    );
};
