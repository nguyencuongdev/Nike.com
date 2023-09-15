import { createContext } from 'react';


export const MENU_BOTTOM_CONTEXT = createContext([
    {
        title: 'Icons',
        children: [
            {
                title: 'Air Force 1',
                url: 'products/shoes/Air-Force-1'
            },
            {
                title: 'Huarache',
                url: 'products/shoes/Huarache'
            },
            {
                title: 'Air Max 90',
                url: 'products/shoes/Air-Max-90'
            },
            {
                title: 'Air Max 95',
                url: 'products/shoes/Air Max 95'
            },
            {
                title: 'Air Max 97',
                url: 'products/shoes/Air-Max-97'
            },
            {
                title: 'Air Max 270',
                url: 'products/shoes/Air-Max-270'
            },
            {
                title: 'All Air Max',
                url: 'products/shoes/Air-Max'
            },
            {
                title: 'Vapormax',
                url: 'products/shoes/Vapormax'
            }
        ]
    },
    {
        title: 'Shoes',
        children: [
            {
                title: 'All Shoes',
                url: 'products/shoes'
            },
            {
                title: 'Jordan Shoes',
                url: 'products/shoes/Jordan'
            },
            {
                title: 'Running Shoes',
                url: 'products/shoes/Running'
            },
            {
                title: 'Basketball Shoes',
                url: 'products/shoes/Basketball'
            },
            {
                title: 'Football Shoes',
                url: 'products/shoes/Football'
            },
            {
                title: 'Gym & Training Shoes',
                url: 'products/shoes/Gym & Training'
            },
            {
                title: 'Lifestyle Shoes',
                url: 'products/shoes/Lifestyle'
            }
        ]
    },
    {
        title: 'Clothing',
        children: [
            {
                title: 'All Clothing',
                url: 'products/clothing'
            },
            {
                title: 'Modest Wear',
                url: 'products/clothing/ModestWear'
            },
            {
                title: 'Hoodies & Pullovers',
                url: 'products/clothing/Hoodies & Pullovers'
            },
            {
                title: 'Shirts',
                url: 'products/clothing/Shirts'
            },
            {
                title: 'Jackets',
                url: 'products/clothing/Jackets'
            },
            {
                title: 'Shorts',
                url: 'products/clothing/Shorts'
            }
        ]
    },
    {
        title: 'Kid\'s',
        children: [
            {
                title: 'Infant & Toddler Shoes',
                url: '/kids/shoes/Infant-Toddler'
            },
            {
                title: 'Kids\' Shoes',
                url: '/kids/shoes'
            },
            {
                title: 'Kids\' Jordan Shoes',
                url: '/kids/shoes/Jordan'
            },
            {
                title: 'Kids\' Basketball Shoes',
                url: '/kids/shoes/Basketball'
            },
            {
                title: 'Kids\'s Running Shoes',
                url: '/kids/shoes/Running'
            },
            {
                title: 'Kids\'s Clothing',
                url: '/kids/clothing'
            },
            {
                title: 'Kids\'s Backpacks',
                url: '/kids/backpacks'
            },
        ]
    }
])