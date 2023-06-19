import {StoryFn} from '@storybook/react';
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={classNames('app', {}, [theme])}>
                <Story />
            </div>
        </ThemeProvider>
    )
};

