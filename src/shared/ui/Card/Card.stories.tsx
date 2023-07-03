import type {Meta, StoryObj} from '@storybook/react';
import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Normal: Story = {};
Normal.args = {
    children: <Text title="test" text="text text" />,
};
