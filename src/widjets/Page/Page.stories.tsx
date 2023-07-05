import type {Meta, StoryObj} from '@storybook/react';
import { Page } from './Page';

const meta: Meta<typeof Page> = {
    title: 'widjets/Page',
    component: Page,
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
