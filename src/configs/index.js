const configs = {
    router: {
        signup: '/signup',
        login: '/login',
        home: '/',
        productAll: '/products',
        productByType: '/products/:type',
        productByTypeAndGender: '/products/:type/:gender',
        productByTypeAndGenderAndSuitableFor: '/products/:type/:gender/:suitable',
        shopByBrand: '/shopbybrand/:brand',
        shopByBrandAndGender: '/shopbybrand/:brand/:gender',
        shopbyGender: '/shopbygender/:gender',
    }
}


export const routerConfig = configs.router;