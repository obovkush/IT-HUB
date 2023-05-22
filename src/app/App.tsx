import {Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from './providers/ThemeProvider';
import {Navbar} from 'widjets/ui/Navbar';
import {classNames} from 'shared/lib/classNames/classNames';

const App: React.FC = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<Link to={'/about'}>AboutPage</Link>
			<button onClick={toggleTheme}>Тема</button>
		</div>
	);
};

export default App;
