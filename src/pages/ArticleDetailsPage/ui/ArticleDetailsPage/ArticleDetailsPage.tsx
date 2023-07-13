import {useTranslation} from 'react-i18next';
import {memo, useCallback} from 'react';
import {ArticleDetails, ArticleList} from 'entities/Article';
import {useNavigate, useParams} from 'react-router-dom';
import {Text, TextSize} from 'shared/ui/Text/Text';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useDispatch, useSelector} from 'react-redux';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import {getArticleComments} from '../../model/slices/articleDetailsCommentsSlice';
import {getArticleCommentsIsLoading} from '../../model/selectors/comments';
import {getArticleRecommendations} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import {getArticleRecommendationsIsLoading} from '../../model/selectors/recommendations';
import {AddCommentForm} from 'features/addCommentForm';
import {addCommentForArticle} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {RoutePath} from 'shared/config/routerConfig/routerConfig';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import {Page} from 'widjets/Page/Page';
import {articleDetailsPageReducer} from '../../model/slices';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

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
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>{t('Статья не найдена')}</Page>;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Рекомендуем')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
