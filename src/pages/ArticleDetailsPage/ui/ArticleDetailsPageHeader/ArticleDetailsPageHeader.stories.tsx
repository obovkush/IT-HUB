import type {Meta, StoryObj} from '@storybook/react';

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Default: Story = {
    render: () => <ArticleDetailsPageHeader />,
};
Default.args = {};
