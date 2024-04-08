import type {Meta, StoryObj} from '@storybook/react';
import {NotificationList} from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof NotificationList>;

export const Default: Story = {
    render: () => <NotificationList />,
};
Default.decorators = [StoreDecorator({})];
Default.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                },
            ],
        },
    ],
};
