import type {Meta, StoryObj} from '@storybook/react';
import ProfilePage from './ProfilePage';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {Profile} from 'entities/Profile';
import {Country, Currency} from 'shared/const/common';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

const data: Profile = {
    firstname: 'Oleg',
    lastname: 'Bovkush',
    country: Country.Russia,
    city: 'Moscow',
    age: 42,
    currency: Currency.RUB,
    username: 'admin',
    avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
};

export const Default: Story = {
    render: () => <ProfilePage />,
};
Default.decorators = [StoreDecorator({profile: {form: data, data}})];

export const Dark: Story = {
    render: () => <ProfilePage />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({profile: {form: data, data}})];
