import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ThemeDecorator],
} as Meta<typeof MainPage>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof MainPage> = (args) => <MainPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
