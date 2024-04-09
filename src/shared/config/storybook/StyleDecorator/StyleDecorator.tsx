import {StoryFn} from '@storybook/react';
// eslint-disable-next-line import-module/layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = (Story: StoryFn) => (<Story />);
