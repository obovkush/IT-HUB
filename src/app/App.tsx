import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/helpers/classes/classNames';
import { useTheme } from './providers/ThemeProvider';


const App: React.FC = () => {
	const { theme, toggleTheme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Link to={'/'}>MainPage</Link>
			<Link to={'/about'}>AboutPage</Link>
			<button onClick={toggleTheme}>Тема</button>

		</div>
	);
};

export default App;
