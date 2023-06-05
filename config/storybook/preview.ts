import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { withRouter } from 'storybook-addon-react-router-v6';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator,
        RouterDecorator,
        withRouter,
    ],
};

export const globalTypes = {
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
        }
    }
}