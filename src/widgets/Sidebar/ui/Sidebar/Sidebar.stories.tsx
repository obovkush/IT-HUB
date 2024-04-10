import type {Meta, StoryObj} from '@storybook/react';

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/const/theme';

import {Sidebar} from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
    render: () => <Sidebar />,
};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {
    render: () => <Sidebar />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthSidebar: Story = {
    render: () => <Sidebar />,
};
AuthSidebar.decorators = [
    StoreDecorator({
        user: {authData: {}},
    }),
];
