import { FC, useState } from 'react';
import classNames from 'classnames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onTogle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, className)}>
            <button type="button" onClick={onTogle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.language} />
            </div>
        </div>
    );
};
