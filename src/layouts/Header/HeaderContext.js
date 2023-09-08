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
                    url: '/men/shoes'
                },
                {
                    title: 'Newest Sneakers',
                    url: '/men/shoes/sneakers'
                },
                {
                    title: 'Lifestyle',
                    url: '/men/shoes/lifestyle'
                },
                {
                    title: 'Jordan',
                    url: '/men/shoes/jordan'
                },
                {
                    title: 'Running',
                    url: '/men/shoes/running'
                },
                {
                    title: 'Basketball',
                    url: '/men/shoes/basketball'
                },
                {
                    title: 'Football',
                    url: '/men/shoes/football'
                },
                {
                    title: 'Basketball',
                    url: '/men/shoes/basketball'
                },
                {
                    title: 'Sandals',
                    url: '/men/sandals'
                },
                {
                    title: 'Top Kicks Under 3,000,000₫',
                    url: '/men/shoes/lowprice'
                }
            ]
        },
        {
            title: 'Clothing',
            children: [
                {
                    title: 'All Clothing',
                    url: '/men/clothing'
                },
                {
                    title: 'Tops and T-Shirts',
                    url: '/men/clothing/tshirts'
                },
                {
                    title: 'Shorts',
                    url: '/men/clothing/shorts'
                },
                {
                    title: 'Pants and Leggings',
                    url: '/men/clothing/trousers-tights'
                },
                {
                    title: 'Hoodies and Sweatshirts',
                    url: '/men/clothing/hooodies-sewatshirts'
                },
                {
                    title: 'Jackets and Gilets',
                    url: '/men/clothing/jackets-gilets'
                },
                {
                    title: 'Jerseys and Kits',
                    url: '/men/clothing/jerseys-kits'
                },
                {
                    title: 'Jordan',
                    url: '/men/clothing/jordan'
                },
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
                    url: '/men/accessories'
                },
                {
                    title: 'Bags and Backpacks',
                    url: '/men/accessories/bags-backpacks'
                },
                {
                    title: 'Socks',
                    url: '/men/accessories/socks'
                },
                {
                    title: 'Hats and Headwear',
                    url: '/men/accessories/hats-headwear'
                },
            ]
        },
        {
            title: 'Shop By Brand',
            children: [
                {
                    title: 'Nike',
                    url: '/shopbybrand/nike'
                },
                {
                    title: 'Jordan',
                    url: '/shopbybrand/jordan'
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
                    url: '/men/shoes'
                },
                {
                    title: 'Newest Sneakers',
                    url: '/men/shoes/sneakers'
                },
                {
                    title: 'Lifestyle',
                    url: '/men/shoes/lifestyle'
                },
                {
                    title: 'Jordan',
                    url: '/men/shoes/jordan'
                },
                {
                    title: 'Running',
                    url: '/men/shoes/running'
                },
                {
                    title: 'Basketball',
                    url: '/men/shoes/basketball'
                },
                {
                    title: 'Football',
                    url: '/men/shoes/football'
                },
                {
                    title: 'Basketball',
                    url: '/men/shoes/basketball'
                },
                {
                    title: 'Sandals',
                    url: '/men/sandals'
                },
                {
                    title: 'Top Kicks Under 3,000,000₫',
                    url: '/men/shoes/lowprice'
                }
            ]
        },
        {
            title: 'Clothing',
            children: [
                {
                    title: 'All Clothing',
                    url: '/women/clothing'
                },
                {
                    title: 'Tops and T-Shirts',
                    url: '/women/clothing/tshirts'
                },
                {
                    title: 'Sports Bras',
                    url: '/woment/clothing/sports-bras'
                },
                {
                    title: 'Performance Essentials',
                    url: '/men/clothing/performance-essentials'
                },
                {
                    title: 'Pants and Leggings',
                    url: '/women/clothing/trousers-tights'
                },
                {
                    title: 'Shorts',
                    url: '/women/clothing/shorts'
                },
                {
                    title: 'Hoodies and Sweatshirts',
                    url: '/men/clothing/hooodies-sewatshirts'
                },
                {
                    title: 'Jackets and Gilets',
                    url: '/men/clothing/jackets-gilets'
                },
                {
                    title: 'Jerseys and Kits',
                    url: '/men/clothing/jerseys-kits'
                },
                {
                    title: 'Modest Wear',
                    url: '/women/clothing/modest-wear'
                },
                {
                    title: 'Jordan',
                    url: '/men/clothing/jordan'
                },
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
                    url: '/men/accessories'
                },
                {
                    title: 'Bags and Backpacks',
                    url: '/men/accessories/bags-backpacks'
                },
                {
                    title: 'Socks',
                    url: '/men/accessories/socks'
                },
                {
                    title: 'Hats and Headwear',
                    url: '/men/accessories/hats-headwear'
                },
            ]
        },
        {
            title: 'Shop By Brand',
            children: [
                {
                    title: 'Nike',
                    url: '/shopbybrand/nike'
                },
                {
                    title: 'Jordan',
                    url: '/shopbybrand/jordan'
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