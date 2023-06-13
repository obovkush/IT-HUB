import cls from './Navbar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from "react-i18next";
import {useCallback, useState} from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';


interface NavbarProps {
	className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const {t} = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable-next-line */}
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.')}
            </Modal>
        </div>
    );
};
