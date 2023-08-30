
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, className)}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink to='/' className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>
                    Main
                </AppLink>
                <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>
                    About
                </AppLink>
            </div>
        </div>
    );
};

