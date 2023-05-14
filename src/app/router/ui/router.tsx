import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import {RouteProps} from 'react-router-dom';
import {AppRoutes, RouthPath} from 'shared/config/routerConfig/routerConfig';

export const router: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RouthPath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RouthPath.about,
		element: <AboutPage />,
	},
};
