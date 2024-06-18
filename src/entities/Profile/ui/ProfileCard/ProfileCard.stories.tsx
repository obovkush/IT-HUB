import type {Meta, StoryObj} from '@storybook/react';

import {Country} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import {NewDesignDecorator} from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/const/theme';

import {ProfileCard} from './ProfileCard';
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

export const DefaultRedesigned: Story = {
    args: {
        data,
    },
};
DefaultRedesigned.decorators = [NewDesignDecorator];

export const Dark: Story = {
    args: {
        data,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError: Story = {
    args: {
        error: 'true',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const LoadingRedesigned: Story = {
    args: {
        isLoading: true,
    },
};
LoadingRedesigned.decorators = [NewDesignDecorator];
