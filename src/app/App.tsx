import {AppRouter} from './router';
import {useTheme} from './providers/ThemeProvider';
import {classNames} from 'shared/lib/classNames/classNames';
import {Navbar} from 'widjets/Navbar';
import {Sidebar} from 'widjets/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getUserInited, userActions} from 'entities/User';

const App: React.FC = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page" style={{color: 'yellow'}}>
                <Sidebar />
                {inited && <AppRouter />}
            </div>
        </div>
    );
};

export default App;
