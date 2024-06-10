import {Suspense} from 'react';

import {classNames} from '@/shared/lib/classNames/classNames';
import {Loader} from '@/shared/ui/deprecated/Loader';
import {Modal} from '@/shared/ui/deprecated/Modal';

import {LoginFormAsync} from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({className = '', isOpen, onClose}: LoginModalProps) => (
    <Modal className={classNames('', {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);
