/* eslint-disable max-len */
import {memo, useCallback} from 'react';

import {useTranslation} from 'react-i18next';
import {useSearchParams} from 'react-router-dom';

import {classNames} from '@/shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {Page} from '@/widjets/Page';

import cls from './ArticlesPage.module.scss';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {articlesPageReducer} from '../../model/slices/articlesPageSlice';
import {ArticleInfiniteList} from '../ArticleInfiniteList/ArticleInfiniteList';
import {ArticlesPageFilters} from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const {className = ''} = props;
    const {} = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticlesPageFilters />
                <ArticleInfiniteList className={cls.list} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
