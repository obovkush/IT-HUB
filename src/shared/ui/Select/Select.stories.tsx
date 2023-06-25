import type {Meta, StoryObj} from '@storybook/react';
import {Select} from 'shared/ui/Select/Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '123', content: 'Первый пункт' },
            { value: '1234', content: 'Второй пункт' },
        ],
    },
};
