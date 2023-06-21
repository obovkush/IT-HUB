import type {Meta, StoryObj} from '@storybook/react';
import ProfilePage from './ProfilePage';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
    render: () => <ProfilePage />,
};

export const Dark: Story = {
    render: () => <ProfilePage />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
