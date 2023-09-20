import { routerConfig } from '~/configs';
import { OnlyHeaderLayout } from '~/layouts';
import { HomePage, ProductPage, LoginPage, SignupPage } from '~/pages';

export const publicRoutes = [
    {
        path: routerConfig.login,
        component: LoginPage,
        layout: OnlyHeaderLayout
    },
    {
        path: routerConfig.signup,
        component: SignupPage,
        layout: OnlyHeaderLayout
    },
    {
        path: routerConfig.home,
        component: HomePage,
        layout: OnlyHeaderLayout
    },
    {
        path: routerConfig.productAll,
        component: ProductPage,
    },
    {
        path: routerConfig.productByType,
        component: ProductPage,
    },
    {
        path: routerConfig.productByTypeAndGender,
        component: ProductPage,
    },
    {
        path: routerConfig.productByTypeAndGenderAndSuitableFor,
        component: ProductPage,
    }
    ,
    {
        path: routerConfig.shopByBrand,
        component: ProductPage,
    },
    {
        path: routerConfig.shopByBrandAndGender,
        component: ProductPage,
    },
    {
        path: routerConfig.shopbyGender,
        component: ProductPage,
    },

];

export const privateRoutes = [];