import type {Meta, StoryObj} from '@storybook/react';

import {NewDesignDecorator} from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

import {CommentCard} from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/CommentCard',
    component: CommentCard,
};

export default meta;

type Story = StoryObj<typeof CommentCard>;

const defaultArgs = {
    args: {
        comment: {
            id: '1',
            text: 'hello world',
            user: {id: '1', username: 'Vasya'},
        },
    },
};

export const Default: Story = {...defaultArgs};

export const DefaultRedesigned: Story = {...defaultArgs};
DefaultRedesigned.decorators = [NewDesignDecorator];

export const Loading: Story = {args: {...defaultArgs, isLoading: true}};

export const LoadingRedesigned: Story = {args: {...defaultArgs.args, isLoading: true}};
LoadingRedesigned.decorators = [NewDesignDecorator];
