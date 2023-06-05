import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator],
} as Meta<typeof NotFoundPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
