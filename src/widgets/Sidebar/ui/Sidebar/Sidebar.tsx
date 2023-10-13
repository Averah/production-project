import { FC, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onTogle = () => {
        setCollapsed((prev) => !prev);
    };

    const { t } = useTranslation('sidebar');
    const collapse = t('Свернуть');
    const extend = t('Развернуть');

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, className)}
        >
            <Button
                data-testid="sidebar-toggle"
                type="button"
                onClick={onTogle}
            >
                {collapsed ? extend : collapse}

            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.language} />
            </div>
        </div>
    );
};
