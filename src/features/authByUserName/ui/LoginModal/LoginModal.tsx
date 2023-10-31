import React, { FC } from 'react';
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <div className={classNames(cls.LoginModal, className)}>
            <Modal isOpen={isOpen} onClose={onClose}>
                <LoginForm />
            </Modal>
        </div>
    );
};
