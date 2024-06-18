import {withThemeByClassName} from '@storybook/addon-themes';
import {Preview} from '@storybook/react';

import {FeaturesFlagsDecorator} from '../../src/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import {RouterDecorator} from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import {StyleDecorator} from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import {SuspenseDecorator} from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
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
        layout: 'fullscreen',
    },
    decorators: [
        StyleDecorator,
        withThemeByClassName({
            themes: {
                light: `app ${Theme.LIGHT}`,
                dark: `app ${Theme.DARK}`,
                orange: `app ${Theme.ORANGE}`,
            },
            defaultTheme: 'light',
        }),
        RouterDecorator,
        SuspenseDecorator,
        FeaturesFlagsDecorator({}),
    ],

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
                    {value: 'orange', title: 'orange'},
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
