import React, { FC, Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import LoginFormLazy from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <div className={className}>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Suspense fallback={<Loader />}>
                    <LoginFormLazy onSuccess={onClose} />
                </Suspense>
            </Modal>
        </div>
    );
};
