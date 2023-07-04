/* eslint-disable max-len */
import {memo, useCallback} from 'react';
import {ArticleList, ArticleView, ArticleViewSelector} from 'entities/Article';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import {articlesPageActions, articlesPageReducer, getArticles} from '../../model/slices/articlesPageSlice';
import {getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView} from '../../model/selectors/articlesPageSelectors';
import {fetchArticlesList} from '../../model/services/fetchArticlesList/fetchArticlesList';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {Page} from 'shared/ui/Page/Page';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const {className = ''} = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
