import type {Meta, StoryObj} from '@storybook/react';

import {ErrorPage} from './ErrorPage';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ErrorPage> = {
    title: 'pages/ErrorPage',
    component: ErrorPage,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {
    render: () => <ErrorPage />,
};