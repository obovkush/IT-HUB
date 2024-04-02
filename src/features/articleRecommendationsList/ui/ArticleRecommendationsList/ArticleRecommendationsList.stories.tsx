import type {Meta, StoryObj} from '@storybook/react';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import {ArticleRecommendationsList} from './ArticleRecommendationsList';
import {Article} from 'entities/Article';


const meta: Meta<typeof ArticleRecommendationsList> = {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
};

export default meta;

type Story = StoryObj<typeof ArticleRecommendationsList>;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: 'admin' },
    blocks: [],
    type: [],
    title: 'TEST',
    subtitle: 'subtest',
};

export const Default: Story = {
    render: () => <ArticleRecommendationsList />,
};
Default.decorators = [StoreDecorator({})];
Default.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
