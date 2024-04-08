import type {Meta, StoryObj} from '@storybook/react';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleRating from './ArticleRating';

const meta: Meta<typeof ArticleRating> = {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const Default: Story = {
    render: () => <ArticleRating articleId='1' />,
};
Default.args = {
    articleId: '1',
};
Default.decorators = [
    StoreDecorator({
        user: {
            authData: {id: '1'},
        },
    }),
];
Default.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    rate: 4,
                },
            ],
        },
    ],
};

export const WithoutRate: Story = {
    render: () => <ArticleRating articleId='1' />,
};
WithoutRate.decorators = [
    StoreDecorator({
        user: {
            authData: {id: '1'},
        },
    }),
];
WithoutRate.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1&articleId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
