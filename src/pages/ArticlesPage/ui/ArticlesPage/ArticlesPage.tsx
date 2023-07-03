import {memo} from 'react';
import {ArticleList} from 'entities/Article/ui/ArticleList/ArticleList';
import {ArticleView} from 'entities/Article/model/types/article';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';


interface ArticlesPageProps {
	className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {className = ''} = props;

    return <div className={classNames(cls.ArticlesPage, {}, [className])}>
        <ArticleList
            isLoading
            view={ArticleView.BIG}
            articles={[]}
        />
    </div>
};

export default memo(ArticlesPage);
