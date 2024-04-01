import type {Meta, StoryObj} from '@storybook/react';

import {ArticleDetailsComments} from './ArticleDetailsComments';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPageHeader',
    component: ArticleDetailsComments,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>;

export const Default: Story = {
    render: () => <ArticleDetailsComments id={'1'} />,
};
Default.args = {};
