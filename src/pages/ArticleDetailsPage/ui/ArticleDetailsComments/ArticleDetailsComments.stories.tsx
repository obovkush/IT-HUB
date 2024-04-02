import type {Meta, StoryObj} from '@storybook/react';

import {ArticleDetailsComments} from './ArticleDetailsComments';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>;

export const Default: Story = {
    render: () => <ArticleDetailsComments id={'1'} />,
};
Default.decorators = [StoreDecorator({})];
