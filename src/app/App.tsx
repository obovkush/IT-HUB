import './styles/index.scss';
import {useTheme} from './providers/ThemeProvider';
import {Navbar} from 'widjets/ui/Navbar';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppRouter} from './router';

const App: React.FC = () => {
	const {theme} = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<AppRouter />
		</div>
	);
};

export default App;
