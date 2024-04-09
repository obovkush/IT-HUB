import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {getUserInited, userActions} from '@/entities/User';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTheme} from '@/shared/lib/hooks/useTheme/useTheme';
import {Navbar} from '@/widjets/Navbar';
import {Sidebar} from '@/widjets/Sidebar';


import {AppRouter} from './router';

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
            <div className='content-page'>
                <Sidebar />
                {inited && <AppRouter />}
            </div>
        </div>
    );
};

export default App;
