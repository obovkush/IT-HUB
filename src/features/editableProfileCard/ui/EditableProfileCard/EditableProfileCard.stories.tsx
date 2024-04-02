import type {Meta, StoryObj} from '@storybook/react';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {EditableProfileCard} from './EditableProfileCard';


const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
};

export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {
    render: () => <EditableProfileCard id={'1'} />,
};
Default.decorators = [StoreDecorator({})];
