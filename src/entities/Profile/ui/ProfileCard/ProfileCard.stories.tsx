import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/app/providers/ThemeProvider';
import {ProfileCard} from './ProfileCard';
import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import {Profile} from '../../model/types/profile';

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
