import type {Meta, StoryObj} from '@storybook/react';

import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
    title: 'pages/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const Default: Story = {
    render: () => <ArticleDetailsPageHeader />,
};
Default.args = {};
