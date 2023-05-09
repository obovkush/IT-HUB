import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Suspense } from 'react';
import Loading from './components/Loading';

const App: React.FC = () => (
	<div className='app'>
		<Link to={'/'}>MainPage</Link>
		<Link to={'/about'}>AboutPage</Link>
		<Suspense fallback={<Loading/>}>
			<Routes>
				<Route path={'/about'} element={<AboutPageLazy />} />
				<Route path={'/'} element={<MainPageLazy />} />
			</Routes>
		</Suspense>
	</div>
);

export default App;
