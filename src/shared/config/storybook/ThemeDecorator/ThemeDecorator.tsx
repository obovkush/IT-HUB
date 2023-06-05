import {StoryContext, StoryFn} from '@storybook/react';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (Story: StoryFn, context: StoryContext) => {
    const {globals: {theme}} = context;
    return (
        <ThemeProvider>
            <div className={classNames('app', {}, [theme])}>
                <Story />
            </div>
        </ThemeProvider>
    )
};

