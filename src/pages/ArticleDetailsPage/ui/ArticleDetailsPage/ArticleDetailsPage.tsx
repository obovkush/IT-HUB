import {memo} from 'react';

import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';

import {ArticleDetails} from '@/entities/Article';
import {ArticleRating} from '@/features/articleRating';
import {ArticleRecommendationsList} from '@/features/articleRecommendationsList';
import {classNames} from '@/shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {ToggleFeatures} from '@/shared/lib/features';
import {Card} from '@/shared/ui/deprecated/Card';
import {VStack} from '@/shared/ui/redesigned/Stack';
import {Page} from '@/widgets/Page';

import cls from './ArticleDetailsPage.module.scss';
import {articleDetailsPageReducer} from '../../model/slices';
import {ArticleDetailsComments} from '../ArticleDetailsComments/ArticleDetailsComments';
import {ArticleDetailsPageHeader} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {className = ''} = props;
    const {t} = useTranslation('article-details');
    const {id} = useParams<{id: string}>();

    if (!id) {
        return <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('Статья не найдена')}</Page>;
    }

    // Для функций
    // const articleRatingCard = toggleFeatures({
    //     name: 'isArticleRatingEnabled',
    //     on: () => <ArticleRating articleId={id} />,
    //     off: () => <Card>{t('Оценка статей скоро появится!')}</Card>,
    // });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ToggleFeatures
                        feature='isArticleRatingEnabled'
                        on={<ArticleRating articleId={id} />}
                        off={<Card>{t('Оценка статей скоро появится!')}</Card>}
                    />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
