import { Meta, StoryFn  } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator];