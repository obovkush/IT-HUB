import {HTMLAttributes, memo, ReactNode} from 'react';

import {classNames} from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outlined' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';
export type CardBorder = 'normal' | 'round';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    border?: CardBorder;
    fullHeight?: boolean;
    fullWidth?: boolean;
}

const mapPaddingToClass: Record<CardPadding, string> = {
    '0': 'gap_0',
    '8': 'gap_8',
    '16': 'gap_16',
    '24': 'gap_24',
};

const mapBorderToClass: Record<CardBorder, string> = {
    normal: 'normal_border',
    round: 'round_border',
};

export const Card = memo((props: CardProps) => {
    const {className = '', children, variant = 'normal', padding = '8', border = 'normal', fullHeight, fullWidth, ...otherProps} = props;

    const paddingClass = mapPaddingToClass[padding];
    const borderClass = mapBorderToClass[border];

    return (
        <div
            className={classNames(cls.Card, {[cls.fullHeight]: fullHeight, [cls.fullWidth]: fullWidth}, [
                className,
                cls[variant],
                cls[paddingClass],
                cls[borderClass],
            ])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
