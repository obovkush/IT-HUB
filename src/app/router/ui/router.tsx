import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';
import {RouteProps} from 'react-router-dom';
import {AppRoutes, RoutePath} from 'shared/config/routerConfig/routerConfig';

export const router: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
