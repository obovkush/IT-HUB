import type {Meta, StoryObj} from '@storybook/react';
import {NotificationItem} from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entity/NotificationItem',
    component: NotificationItem,
};

export default meta;

type Story = StoryObj<typeof NotificationItem>;

const item = {
    id: '1',
    title: '1111',
    description: '1111111',
    href: '#',
}

export const Default: Story = {
    render: () => <NotificationItem item={item}/>,
};
