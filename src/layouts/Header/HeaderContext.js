import { createContext } from 'react';

const MENU_NEW_FEARTURED = {
    children: [
        {
            title: 'New & Featured',
            children: [
                {
                    title: 'New Arrivals',
                    url: '/newArrivals',
                },
                {
                    title: 'Lastest Shoes',
                    url: '/newShoes',
                },
                {
                    title: 'Lastest Clothing',
                    url: '/newClothing',
                },
                {
                    title: 'Bestsellers',
                    url: '/bestsellers',
                },
                {
                    title: 'Member Exclusive',
                    url: '/member-access',
                },
                {
                    title: 'Natioval Team Kits',
                    url: '/football',
                },
                {
                    title: 'Top Kicks Under 3,000,000₫',
                    url: '/lower-price',
                },
            ]
        },
        {
            title: 'Shop Icons',
            children: [
                {
                    title: 'Air Force 1',
                    url: '/air-force-1/shoes',
                },
                {
                    title: 'Air Jordan 1',
                    url: '/jordan-1/shoes',
                },
                {
                    title: 'Air Max',
                    url: '/air-max/shoes',
                },
                {
                    title: 'Dunk',
                    url: '/dunk/shoes',
                },
                {
                    title: 'Blazer',
                    url: '/blazer/shoes',
                },
                {
                    title: 'Pegasus',
                    url: '/pegasus/shoes',
                },
            ]
        },
        {
            title: 'New for Men',
            children: [
                {
                    title: 'Shoes',
                    url: '/new/men/shoes',
                },
                {
                    title: 'Clothing',
                    url: '/new/men/clothing',
                },
                {
                    title: 'Accessories',
                    url: '/new/men/accessories',
                },
                {
                    title: 'Shop All New',
                    url: '/new/men/',
                }
            ]
        },
        {
            title: 'New for Women',
            children: [
                {
                    title: 'Shoes',
                    url: '/new/women/shoes',
                },
                {
                    title: 'Clothing',
                    url: '/new/women/clothing',
                },
                {
                    title: 'Accessories',
                    url: '/new/women/accessories',
                },
                {
                    title: 'Shop All New',
                    url: '/new/women/',
                }
            ]
        },
        {
            title: 'New for Kids',
            children: [
                {
                    title: 'Shoes',
                    url: '/new/kids/shoes',
                },
                {
                    title: 'Clothing',
                    url: '/new/kids/clothing',
                },
                {
                    title: 'Accessories',
                    url: '/new/kids/accessories',
                },
                {
                    title: 'Shop All New',
                    url: '/new/kids/',
                }
            ]
        },
    ]
}

const MENU_MEN = {
    children: [
        {
            title: 'Featured',
            children: [
                {
                    title: 'New Releases',
                    url: '/new/men'
                },
                {
                    title: 'Bestsellers',
                    url: '/new/men/bestsellers'
                },
                {
                    title: 'Member Exclusive',
                    url: '/member-access/men/'
                },
                {
                    title: 'Jordan',
                    url: '/men/jordan'
                },
                {
                    title: 'Retro Running',
                    url: '/men/retro-running'
                },
                {
                    title: 'National Team Kits',
                    url: '/men/football'
                },
                {
                    title: 'Sale',
                    url: '/men/sale'
                }
            ]
        },
        {
            title: 'Shoes',
            children: [
                {
                    title: 'All Shoes',
                    url: '/products/shoes/Men'
                },
                {
                    title: 'Newest Sneakers',
                    url: '/products/shoes/Men/Sneakers'
                },
                {
                    title: 'Lifestyle',
                    url: '/products/shoes/Men/Lifestyle'
                },
                {
                    title: 'Running',
                    url: '/products/shoes/Men/Running'
                },
                {
                    title: 'Basketball',
                    url: '/products/shoes/Men/Basketball'
                },
                {
                    title: 'Football',
                    url: '/products/shoes/Men/Football'
                },
                {
                    title: 'Basketball',
                    url: '/products/shoes/Men/Basketball'
                },
                {
                    title: 'Sandals',
                    url: '/products/shoes/Men/sandals'
                }
            ]
        },
        {
            title: 'Clothing',
            children: [
                {
                    title: 'All Clothing',
                    url: '/products/clothing/Men'
                },
                {
                    title: 'Tops & T-Shirts',
                    url: 'products/clothing/Men/Tops & T-Shirts'
                },
                {
                    title: 'Shorts',
                    url: '/products/clothing/Men/Shorts'
                },
                {
                    title: 'Pants and Leggings',
                    url: '/products/clothing/Men/Trousers & Tights'
                },
                {
                    title: 'Hoodies and Sweatshirts',
                    url: '/products/clothing/Men/Hoodies & Sweatshirts'
                },
                {
                    title: 'Jackets',
                    url: '/products/clothing/Men/Jackets'
                },
                {
                    title: 'Jerseys and Kits',
                    url: '/products/clothing/Men/jerseys-kits'
                }
            ]
        },
        {
            title: 'Shop By Sport',
            children: [
                {
                    title: 'Running',
                    url: '/shop-sports/running'
                },
                {
                    title: 'Football',
                    url: '/shop-sports/football'
                },
                {
                    title: 'Basketball',
                    url: '/shop-sports/basketball'
                },
                {
                    title: 'Yoga',
                    url: '/shop-sports/yoga'
                },
                {
                    title: 'Skateboarding',
                    url: '/shop-sports/skateboarding'
                },
                {
                    title: 'Tennis',
                    url: '/shop-sports/tennis'
                },
                {
                    title: 'Golf',
                    url: '/shop-sports/golf'
                },
            ]
        },
        {
            title: 'Accessories and Equipment',
            children: [
                {
                    title: 'All Accessories and Equipment',
                    url: '/products/accessories-equipment/Men'
                },
                {
                    title: 'Bags and Backpacks',
                    url: '/products/accessories-equipment/Men/Bags & backpacks'
                },
                {
                    title: 'Socks',
                    url: '/products/accessories-equipment/Men/Socks'
                },
                {
                    title: 'Hats and Headwear',
                    url: '/products/accessories-equipment/Men/Hats & Headwear'
                },
            ]
        },
        {
            title: 'Shop By Brand',
            children: [
                {
                    title: 'Nike',
                    url: '/shopbybrand/Nike/Men'
                },
                {
                    title: 'Jordan',
                    url: '/shopbybrand/Jordan/Men'
                },
            ]
        }
    ]
}

const MENU_WOMEN = {
    children: [
        {
            title: 'Featured',
            children: [
                {
                    title: 'New Releases',
                    url: '/new/men'
                },
                {
                    title: 'Bestsellers',
                    url: '/new/men/bestsellers'
                },
                {
                    title: 'Member Exclusive',
                    url: '/member-access/men/'
                },
                {
                    title: 'Jordan',
                    url: '/men/jordan'
                },
                {
                    title: 'Retro Running',
                    url: '/men/retro-running'
                },
                {
                    title: 'National Team Kits',
                    url: '/men/football'
                },
                {
                    title: 'Sale',
                    url: '/men/sale'
                }
            ]
        },
        {
            title: 'Shoes',
            children: [
                {
                    title: 'All Shoes',
                    url: '/products/shoes/Women'
                },
                {
                    title: 'Newest Sneakers',
                    url: 'products/shoes/Women/Sneakers'
                },
                {
                    title: 'Lifestyle',
                    url: 'products/shoes/Women/Lifestyle'
                },
                {
                    title: 'Running',
                    url: 'products/shoes/Women/Running'
                },
                {
                    title: 'Basketball',
                    url: 'products/shoes/Women/Basketball'
                },
                {
                    title: 'Football',
                    url: 'products/shoes/Women/Football'
                },
                {
                    title: 'Sandals',
                    url: '/products/shoes/Women/Sandals'
                }
            ]
        },
        {
            title: 'Clothing',
            children: [
                {
                    title: 'All Clothing',
                    url: '/products/clothing/Women'
                },
                {
                    title: 'Tops & T-Shirts',
                    url: '/products/clothing/Women/Tops & T-Shirts'
                },
                {
                    title: 'Sports Bras',
                    url: '/products/clothing/Women/Sports Bras'
                },
                {
                    title: 'Performance Essentials',
                    url: '/products/clothing/Women/Performance Essentials'
                },
                {
                    title: 'Pants and Leggings',
                    url: '/products/clothing/Women/Trousers & Tights'
                },
                {
                    title: 'Shorts',
                    url: '/products/clothing/Women/Shorts'
                },
                {
                    title: 'Hoodies and Sweatshirts',
                    url: '/products/clothing/Women/Hoodies & Sweatshirts'
                },
                {
                    title: 'Jackets',
                    url: '/products/clothing/Women/Jackets'
                },
                {
                    title: 'Jerseys & Kits',
                    url: '/products/clothing/Women/Jerseys & kits'
                },
                {
                    title: 'Modest Wear',
                    url: '/products/clothing/Women/Modest Wear'
                }
            ]
        },
        {
            title: 'Shop By Sport',
            children: [
                {
                    title: 'Running',
                    url: '/shopbysports/Running'
                },
                {
                    title: 'Football',
                    url: '/shopbysports/Football'
                },
                {
                    title: 'Basketball',
                    url: '/shopbysports/Basketball'
                },
                {
                    title: 'Yoga',
                    url: '/shopbysports/Yoga'
                },
                {
                    title: 'Tennis',
                    url: '/shopbysports/Tennis'
                },
                {
                    title: 'Golf',
                    url: '/shopbysports/Golf'
                },
            ]
        },
        {
            title: 'Accessories and Equipment',
            children: [
                {
                    title: 'All Accessories and Equipment',
                    url: '/products/accessories-equipment/Women'
                },
                {
                    title: 'Bags & Backpacks',
                    url: '/products/accessories-equipment/Women/Bags & Backpacks'
                },
                {
                    title: 'Socks',
                    url: '/products/accessories-equipment/Women/Socks'
                },
                {
                    title: 'Hats and Headwear',
                    url: '/products/accessories-equipment/Women/Hats & Headwear'
                },
            ]
        },
        {
            title: 'Shop By Brand',
            children: [
                {
                    title: 'Nike',
                    url: '/shopbybrand/Nike/Women'
                },
                {
                    title: 'Jordan',
                    url: '/shopbybrand/Jordan/Women'
                },
            ]
        }
    ]
}

const MENU_SALES = {
    children: [
        {
            title: 'Featured',
            children: [
                {
                    title: 'Shop All Sales',
                    url: '/sales'
                },
            ]
        },
        {
            title: 'Men\'s Sale',
            children: [
                {
                    title: 'Shoes',
                    url: '/sales/men/shoes'
                },
                {
                    title: 'Clothing',
                    url: '/sales/men/clothing'
                }
            ]
        },
        {
            title: 'Women\'s Sale',
            children: [
                {
                    title: 'Shoes',
                    url: '/sales/women/shoes'
                },
                {
                    title: 'Clothing',
                    url: '/sales/women/clothing'
                }
            ]
        },
        {
            title: 'Kid\'s Sale',
            children: [
                {
                    title: 'Shoes',
                    url: '/sales/kids/shoes'
                },
                {
                    title: 'Clothing',
                    url: '/sales/kids/clothing'
                }
            ]
        }
    ]
}

export const MENU_ACCOUNT_CONTEXT = createContext({
    title: 'Account',
    children: [
        {
            title: 'Profile',
            url: '/profile',
        },
        {
            title: 'Orders',
            url: '/Orders',
        },
        {
            title: 'Favorites',
            url: '/favorites',
        }, {
            title: 'Account settings',
            url: '/settings',
        },
        {
            title: 'Log out',
            url: '/logout',
        }
    ]
})

export const NAVIGATION_ITEM_CONTEXT = createContext([
    {
        title: 'New & Featured',
        url: '#',
        children: MENU_NEW_FEARTURED,
    },
    {
        title: 'Men',
        url: '/men',
        children: MENU_MEN,
    },
    {
        title: 'Women',
        url: '/woman',
        children: MENU_WOMEN,
    },
    {
        title: 'Kids',
        url: '/kids'
    },
    {
        title: 'Sale',
        url: '/sale',
        children: MENU_SALES,
    },
]);