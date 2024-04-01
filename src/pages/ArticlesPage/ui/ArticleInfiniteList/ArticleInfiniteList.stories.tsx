import type {Meta, StoryObj} from '@storybook/react';

import {ArticleInfiniteList} from './ArticleInfiniteList';

const meta: Meta<typeof ArticleInfiniteList> = {
    title: 'pages/ArticleDetailsPageHeader',
    component: ArticleInfiniteList,
};

export default meta;

type Story = StoryObj<typeof ArticleInfiniteList>;

export const Default: Story = {
    render: () => <ArticleInfiniteList />,
};
