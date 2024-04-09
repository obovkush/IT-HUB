import type {Meta, StoryObj} from '@storybook/react';

import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof AboutPage>;

export const Default: Story = {
    render: () => <AboutPage />,
};
