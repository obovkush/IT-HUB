import {Preview} from '@storybook/react';

import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import {SuspenseDecorator} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import {ThemeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '../../src/shared/const/theme';


const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator, SuspenseDecorator],

    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme',
            defaultValue: 'light',
            toolbar: {
                icon: 'circlehollow',
                items: [
                    {value: 'light', title: 'light'},
                    {value: 'dark', title: 'dark'},
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
        locale: {
            name: 'Locale',
            description: 'Internationalization locale',
            toolbar: {
                icon: 'globe',
                items: [
                    {value: 'en', title: 'English'},
                    {value: 'ru', title: 'Русский'},
                ],
                showName: true,
            },
        },
    },
};
export default preview;
