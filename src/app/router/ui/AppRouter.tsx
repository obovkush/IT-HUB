import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {router} from './router';

const AppRouter = () => {
	return (
		<Suspense
			fallback={
				<p>
					<i>Loading...</i>
				</p>
			}
		>
			<Routes>
				{Object.values(router).map(({element, path}) => (
					<Route path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
