export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RouthPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}
