import {useCallback} from 'react';

import {saveJsonSettings} from '@/entities/User';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import {Theme} from '@/shared/const/theme';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useTheme} from '@/shared/lib/hooks/useTheme/useTheme';
import {useThrottle} from '@/shared/lib/hooks/useThrottle/useThrottle';
import {Button, ButtonTheme} from '@/shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className = ''}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useThrottle(
        useCallback(() => {
            toggleTheme((newTheme) => {
                dispatch(saveJsonSettings({theme: newTheme}));
            });
        }, [dispatch, toggleTheme]),
        500
    );

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames('', {}, [className])} onClick={onToggleHandler}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
