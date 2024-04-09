import {FC, PropsWithChildren, useMemo, useState} from 'react';

import {LOCAL_STORAGE_THEME_KEY} from '@/shared/const/localstorage';
import {Theme} from '@/shared/const/theme';
import {ThemeContext} from '@/shared/lib/context/ThemeContext';

export interface ThemeProviderProps {
    initialTheme?: Theme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({initialTheme, children}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
