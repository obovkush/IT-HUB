import type {Meta, StoryObj} from '@storybook/react';

import {Navbar} from './Navbar';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/const/theme';

const meta: Meta<typeof Navbar> = {
    title: 'widjets/Navbar',
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
