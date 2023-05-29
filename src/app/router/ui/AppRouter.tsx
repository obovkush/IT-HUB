import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {router} from './router';

const AppRouter = () => {
    return (
        <Suspense fallback={<p><i>Loading...</i></p>}>
            <Routes>
                {Object.values(router).map(({element, path}) => (
                    <Route key={path} path={path} element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    )} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
