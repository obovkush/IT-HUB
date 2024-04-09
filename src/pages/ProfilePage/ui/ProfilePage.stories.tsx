import type {Meta, StoryObj} from '@storybook/react';

import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import {Profile} from '@/entities/Profile';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/const/theme';

import ProfilePage from './ProfilePage';

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
};

export const Default: Story = {
    render: () => <ProfilePage />,
};
Default.decorators = [StoreDecorator({profile: {form: data, data}})];

export const Dark: Story = {
    render: () => <ProfilePage />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({profile: {form: data, data}})];
