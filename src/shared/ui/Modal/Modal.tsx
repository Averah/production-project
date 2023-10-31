import React, {
    FC, ReactNode, useEffect, useCallback,
} from 'react';
import classNames from 'classnames';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
    };

    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation();
    };

    const closeHandler = useCallback(() => {
        onClose();
    }, [onClose]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, closeHandler]);

    if (!isOpen) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, className, 'app_modal')}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};
