import type {Meta, StoryObj} from '@storybook/react';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
    args: {
        value: 'Default',
        items: [
            { content: 'Menu 1', value: 'Menu1' },
            { content: 'Menu 2', value: 'Menu2' },
        ],
    },
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: 'TopLeft',
        items: [
            { content: 'Menu 1', value: 'Menu1' },
            { content: 'Menu 2', value: 'Menu2' },
        ],
    },
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: 'TopRight',
        items: [
            { content: 'Menu 1', value: 'Menu1' },
            { content: 'Menu 2', value: 'Menu2' },
        ],
    },
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: 'BottomLeft',
        items: [
            { content: 'Menu 1', value: 'Menu1' },
            { content: 'Menu 2', value: 'Menu2' },
        ],
    },
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: 'BottomRight',
        items: [
            { content: 'Menu 1', value: 'Menu1' },
            { content: 'Menu 2', value: 'Menu2' },
        ],
    },
};
