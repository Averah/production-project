import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReducersList, useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader/useDynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const ProfilePage: FC = () => {
    const { t } = useTranslation('profile');

    const reducers: ReducersList = {
        profile: profileReducer,
    };
    const dispatch = useAppDispatch();

    const removeAfterUnmount = true;
    useDynamicModuleLoader(reducers, removeAfterUnmount);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [])

    return (
        <div>
            {t('Profile Page')}
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;
