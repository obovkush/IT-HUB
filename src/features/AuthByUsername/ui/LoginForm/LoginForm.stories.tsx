import type {Meta, StoryObj} from '@storybook/react';

import LoginForm from './LoginForm';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
    render: () => <LoginForm onSuccess={() => true}/>,
};
Default.decorators = [StoreDecorator({loginForm: { username: '123', password: 'asd' }})];

export const Dark: Story = {
    render: () => <LoginForm onSuccess={() => true}/>,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({loginForm: { username: '123', password: 'asd' }})];

export const WithError: Story = {
    render: () => <LoginForm onSuccess={() => false}/>,
};
WithError.decorators = [StoreDecorator({loginForm: { username: '123', password: 'asd', error: 'ERROR' }})];

export const Loading: Story = {
    render: () => <LoginForm onSuccess={() => true}/>,
};
Loading.decorators = [StoreDecorator({loginForm: { isLoading: true }})];