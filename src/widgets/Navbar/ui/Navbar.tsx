import React from 'react';
import classNames from 'classnames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.Navbar, className)}>
        <div className={cls.links} />
    </div>
);
