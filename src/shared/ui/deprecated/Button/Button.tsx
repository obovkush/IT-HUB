import {ButtonHTMLAttributes, FC, ForwardedRef, ReactNode, forwardRef} from 'react';

import {Mods, classNames} from '@/shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
    fullWidth?: boolean;
}
/**
 * Устарел, новые компоненты в каталоге redesigned
 * @deprecated
 */
export const Button: FC<ButtonProps> = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {className = '', children, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, disabled, fullWidth, ...otherProps} = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button type='button' className={classNames(cls.Button, mods, [className])} {...otherProps}>
            {children}
        </button>
    );
});
