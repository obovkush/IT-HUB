import {StoryContext, StoryFn} from '@storybook/react';
import {Theme, ThemeProvider} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: StoryFn, context: StoryContext) => {
    const {globals: {theme}} = context;
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={classNames('app', {}, [theme])}>
                <Story />
            </div>
        </ThemeProvider>
    )
};

