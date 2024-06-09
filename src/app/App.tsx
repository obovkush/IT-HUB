import {useEffect} from 'react';

import {useSelector} from 'react-redux';

import {getUserInited, userActions} from '@/entities/User';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useTheme} from '@/shared/lib/hooks/useTheme/useTheme';
import {Navbar} from '@/widgets/Navbar';
import {Sidebar} from '@/widgets/Sidebar';

import {AppRouter} from './router';

const App: React.FC = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                {inited && <AppRouter />}
            </div>
        </div>
    );
};

export default App;
