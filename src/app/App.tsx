import './styles/index.scss';
import {AppRouter} from './router';
import {useTheme} from './providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {Navbar} from 'widjets/Navbar';
import {Sidebar} from 'widjets/Sidebar';

const App: React.FC = () => {
    const {theme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
