import type {Meta, StoryObj} from '@storybook/react';
import {Text, TextSize, TextTheme} from 'shared/ui/Text/Text';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description',
    },
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description',
    },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsum',
    },
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: 'Description Description Description Description',
    },
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsum',
        text: 'Description Description Description Description',
        size: TextSize.L,
    },
};
