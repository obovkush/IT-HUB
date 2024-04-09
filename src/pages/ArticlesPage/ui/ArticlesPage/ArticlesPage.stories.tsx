import type {Meta, StoryObj} from '@storybook/react';

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof ArticlesPage>;

export const Default: Story = {
    render: () => <ArticlesPage />,
};
