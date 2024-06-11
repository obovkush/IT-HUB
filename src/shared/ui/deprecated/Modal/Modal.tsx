import {ReactNode} from 'react';

import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import {useModal} from '@/shared/lib/hooks/useModal/useModal';
import {useTheme} from '@/shared/lib/hooks/useTheme/useTheme';

import cls from './Modal.module.scss';
import {Overlay} from '../../redesigned/Overlay/Overlay';
import {Portal} from '../../redesigned/Portal/Portal';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}
/**
 * Устарел, новые компоненты в каталоге redesigned
 * @deprecated
 */
const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
    const {className = '', children, isOpen, onClose, lazy} = props;
    const {theme} = useTheme();

    const {close, isClosing, isMounted} = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
