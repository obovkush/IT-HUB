import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {Profile, ProfileCard} from 'entities/Profile';
import {Country} from 'entities/Country';
import {Currency} from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.jpg';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

const data: Profile = {
    firstname: 'Oleg',
    lastname: 'Bovkush',
    country: Country.Russia,
    city: 'Moscow',
    age: 42,
    currency: Currency.RUB,
    username: 'admin',
    avatar,
};

export const Default: Story = {
    args: {
        data,
    },
};

export const Dark: Story = {
    args: {
        data,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError: Story = {
    args: {
        error: 'true',
    }
};

export const Loading: Story = {
    args: {
        isLoading: true,
    }
};
