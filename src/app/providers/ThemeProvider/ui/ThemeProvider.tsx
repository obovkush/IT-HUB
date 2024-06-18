import {ReactNode, useEffect, useMemo, useState} from 'react';

import {useJsonSettings} from '@/entities/User';
import {LOCAL_STORAGE_THEME_KEY} from '@/shared/const/localstorage';
import {Theme} from '@/shared/const/theme';
import {ThemeContext} from '@/shared/lib/context/ThemeContext';

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const {initialTheme, children} = props;
    const {theme: defaultTheme} = useJsonSettings();
    const [isThemeInited, setThemeInited] = useState(false);
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.LIGHT);

    const user = localStorage.getItem('user');

    useEffect(() => {
        if (defaultTheme) {
            setTheme(defaultTheme);
            setThemeInited(true);
        }
    }, [defaultTheme, isThemeInited, user]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
