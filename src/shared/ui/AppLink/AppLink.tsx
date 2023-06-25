import cls from './AppLink.module.scss';
import {Link, LinkProps} from 'react-router-dom';
import {FC, ReactNode, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
    children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
    const {
        to,
        className = '',
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {[cls[theme]]: true}, [
                className,
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
