import { routerConfig } from '~/configs';
import { OnlyHeaderLayout } from '~/layouts';
import { HomePage, ProductPage } from '~/pages';

export const publicRoutes = [
    {
        path: routerConfig.home,
        component: HomePage,
        layout: OnlyHeaderLayout
    },
    {
        path: routerConfig.product,
        component: ProductPage,
    },
];

export const privateRoutes = [];