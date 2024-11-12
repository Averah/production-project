import React, { FC } from 'react';
import classNames from 'classnames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {

    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.ProfileCard, className)}>
            <div className={cls.header}>
                <Text  title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input}/>
                <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input}/>
            </div>
        </div>
    );
};
