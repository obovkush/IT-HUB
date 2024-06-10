import type {Meta, StoryObj} from '@storybook/react';

import {StarRating} from './StarRating';


const meta: Meta<typeof StarRating> = {
    title: 'entities/StarRating',
    component: StarRating,
};

export default meta;

type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
    render: () => <StarRating />,
};
