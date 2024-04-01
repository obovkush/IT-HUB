import {useParams} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Text} from 'shared/ui/Text/Text';
import {Page} from 'widjets/Page/Page';
import {VStack} from 'shared/ui/Stack';
import {EditableProfileCard} from 'features/editableProfileCard';

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({className = ''}: ProfilePageProps) => {
    const {id} = useParams<{id: string}>();
    const {t} = useTranslation('profile');

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap='16' max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
