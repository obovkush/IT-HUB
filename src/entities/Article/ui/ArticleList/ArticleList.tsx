import {HTMLAttributeAnchorTarget, memo} from 'react';

import {useTranslation} from 'react-i18next';

import {classNames} from '@/shared/lib/classNames/classNames';
import {Text, TextSize} from '@/shared/ui/deprecated/Text';

import cls from './ArticleList.module.scss';
import {ArticleView} from '../../model/consts/articleConsts';
import {Article} from '../../model/types/article';
import {ArticleListItemSkeleton} from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import {ArticleListItem} from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
    const {className = '', articles, view = ArticleView.SMALL, isLoading, target} = props;
    const {t} = useTranslation();

    if (isLoading) {
        return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{getSkeletons(view)}</div>;
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} className={cls.card} key={article.id} target={target} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.M} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div data-testid='ArticleList' className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
        </div>
    );
});
