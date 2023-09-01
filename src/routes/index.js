import { routerConfig } from '~/configs';
import { OnlyHeaderLayout } from '~/layouts'
import HomePage from '~/pages/HomePage';
import ProductPage from '~/pages/ProductPage'

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