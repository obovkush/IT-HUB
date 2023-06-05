import { Meta, StoryFn } from '@storybook/react';
import { ErrorPage } from './ErrorPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'widget/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator],
} as Meta<typeof ErrorPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
