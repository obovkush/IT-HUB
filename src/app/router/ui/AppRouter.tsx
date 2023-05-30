import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {router} from './router';
import {PageLoader} from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => {
    return (
        <Suspense fallback={<p><i>Loading...</i></p>}>
            <Routes>
                {Object.values(router).map(({element, path}) => (
                    <Route key={path} path={path} element={(
                        <Suspense fallback={<PageLoader />}>
                            {element}
                        </Suspense>
                    )} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
