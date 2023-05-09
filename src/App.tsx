import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Suspense, useContext, useState } from 'react';
import Loading from './components/Loading';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={`app ${theme}`}>
			<Link to={'/'}>MainPage</Link>
			<Link to={'/about'}>AboutPage</Link>
			<button onClick={toggleTheme}>Тема</button>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path={'/about'} element={<AboutPageLazy />} />
					<Route path={'/'} element={<MainPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
