import type {Meta, StoryObj} from '@storybook/react';

import {ErrorPage} from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
    title: 'pages/ErrorPage',
    component: ErrorPage,
};

export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {
    render: () => <ErrorPage />,
};