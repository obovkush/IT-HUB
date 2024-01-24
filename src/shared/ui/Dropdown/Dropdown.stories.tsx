import type {Meta, StoryObj} from '@storybook/react';
import { Button } from '../Button/Button';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        trigger: <Button>Open</Button>,
        items: [
            {
                content: 'Menu 1',
            },
            {
                content: 'Menu 2',
            },
            {
                content: 'Menu 3',
            },
        ]
    },
};
