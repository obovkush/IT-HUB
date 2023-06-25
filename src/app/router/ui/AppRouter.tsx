import {Suspense, useMemo} from 'react';
import {Route, Routes} from 'react-router-dom';
import {router} from './router';
import {PageLoader} from 'shared/ui/PageLoader/PageLoader';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';

const AppRouter = () => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(router).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);

    return (
        <Suspense fallback={<p><i>Loading...</i></p>}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
