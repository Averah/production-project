import { profileReducer } from 'entities/Profile';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';

const ProfilePage: FC = () => {
    const { t } = useTranslation('main');

    const reducers: ReducersList = {
        profile: profileReducer,
    };

    const removeAfterUnmount = true;
    useDynamicModuleLoader(reducers, removeAfterUnmount);

    return (
        <div>
            {t('Profile Page')}
        </div>
    );
};

export default ProfilePage;
