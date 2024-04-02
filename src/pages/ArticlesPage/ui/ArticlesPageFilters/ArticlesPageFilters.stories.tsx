import type {Meta, StoryObj} from '@storybook/react';

import {ArticlesPageFilters} from './ArticlesPageFilters';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof ArticlesPageFilters>;

export const Default: Story = {
    render: () => <ArticlesPageFilters />,
};
