import type {Meta, StoryObj} from '@storybook/react';

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import {NotFoundPage} from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Default: Story = {
    render: () => <NotFoundPage />,
};