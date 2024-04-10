import type {Meta, StoryObj} from '@storybook/react';

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/const/theme';

import {Navbar} from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
    render: () => <Navbar />,
};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {
    render: () => <Navbar />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbar: Story = {
    render: () => <Navbar />,
};
AuthNavbar.decorators = [
    StoreDecorator({
        user: {authData: {}},
    }),
];
