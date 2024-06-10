import {Meta, StoryFn} from '@storybook/react';

import {AppLink, AppLinkTheme} from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        to: '/',
    },
} as Meta<typeof AppLink>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};
