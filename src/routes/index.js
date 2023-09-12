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
        path: routerConfig.productAll,
        component: ProductPage,
    },
    {
        path: routerConfig.productShoes,
        component: ProductPage,
    },
    {
        path: routerConfig.productShoesTypes,
        component: ProductPage,
    },
    {
        path: routerConfig.productClothing,
        component: ProductPage,
    },
    {
        path: routerConfig.productClothingTypes,
        component: ProductPage,
    },

    {
        path: routerConfig.prodcutAccessoriesandEquipment,
        component: ProductPage,
    },
    {
        path: routerConfig.prodcutAccessoriesandEquipmentTypes,
        component: ProductPage,
    },
    {
        path: routerConfig.shopByBrand,
        component: ProductPage,
    },
    {
        path: routerConfig.shopbyGender,
        component: ProductPage,
    },
];

export const privateRoutes = [];