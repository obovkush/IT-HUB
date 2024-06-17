import {memo} from 'react';

import {useTranslation} from 'react-i18next';

import {CountrySelect} from '@/entities/Country';
import {CurrencySelect} from '@/entities/Currency';
import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import {Avatar as AvatarDeprecated} from '@/shared/ui/deprecated/Avatar';
import {Input as InputDeprecated} from '@/shared/ui/deprecated/Input';
import {Loader} from '@/shared/ui/deprecated/Loader';
import {Text as TextDeprecated, TextAlign, TextTheme} from '@/shared/ui/deprecated/Text';
import {HStack, VStack} from '@/shared/ui/redesigned/Stack';

import cls from './ProfileCardDeprecated.module.scss';
import {ProfileCardProps} from '../../model/types/profileCard';

export const ProfileCardDeprecatedError = () => {
    const {t} = useTranslation();

    return (
        <HStack justify='center' max className={classNames(cls.ProfileCard, {}, [cls.error])}>
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профиля')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
};

export const ProfileCardDeprecatedLoader = () => (
    <HStack justify='center' max className={classNames(cls.ProfileCard, {[cls.loading]: true})}>
        <Loader />
    </HStack>
);

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className = '',
        data,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const {t} = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap='8' max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify='center' max className={cls.avatarWrapper}>
                    <AvatarDeprecated src={data?.avatar} />
                </HStack>
            )}
            <InputDeprecated
                value={data?.firstname}
                placeholder={t('Имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid='ProfileCard.firstname'
            />
            <InputDeprecated
                value={data?.lastname}
                placeholder={t('Фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid='ProfileCard.lastname'
            />
            <InputDeprecated value={data?.age} placeholder={t('Ваш возраст')} className={cls.input} onChange={onChangeAge} readonly={readonly} />
            <InputDeprecated value={data?.city} placeholder={t('Город')} className={cls.input} onChange={onChangeCity} readonly={readonly} />
            <InputDeprecated
                value={data?.username}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <InputDeprecated
                value={data?.avatar}
                placeholder={t('Ссылка на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} readonly={readonly} />
            <CountrySelect className={cls.input} value={data?.country} onChange={onChangeCountry} readonly={readonly} />
        </VStack>
    );
});