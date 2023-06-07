import { BugButton } from "app/providers/ErrorBoundary";
import {useTranslation} from "react-i18next";

const MainPage = ({...props}) => {
    const {t} = useTranslation();
    return <div>{t('Главная страница')}
        <BugButton />
    </div>;
};

export default MainPage;