import {StoryFn} from '@storybook/react';
// eslint-disable-next-line import-module/layer-imports
import {ThemeProvider} from '@/app/providers/ThemeProvider';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Theme} from '@/shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={classNames('app', {}, [theme])}>
                <Story />
            </div>
        </ThemeProvider>
    );
};
