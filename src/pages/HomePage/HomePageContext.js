import { createContext } from 'react';


export const MENU_BOTTOM_CONTEXT = createContext([
    {
        title: 'Icons',
        children: [
            {
                title: 'Air Force 1',
                url: '/shoes/Air-Force-1'
            },
            {
                title: 'Huarache',
                url: '/shoes/Huarache'
            },
            {
                title: 'Air Max 90',
                url: '/shoes/Air-Max-90'
            },
            {
                title: 'Air Max 95',
                url: '/shoes/Air-Max-95'
            },
            {
                title: 'Air Max 97',
                url: '/shoes/Air-Max-97'
            },
            {
                title: 'Air Max 270',
                url: '/shoes/Air-Max-270'
            },
            {
                title: 'All Air Max',
                url: '/shoes/Air-Max'
            },
            {
                title: 'Vapormax',
                url: '/shoes/Vapormax'
            }
        ]
    },
    {
        title: 'Shoes',
        children: [
            {
                title: 'All Shoes',
                url: '/shoes/'
            },
            {
                title: 'Jordan Shoes',
                url: '/shoes/Jordan'
            },
            {
                title: 'Running Shoes',
                url: '/shoes/Running'
            },
            {
                title: 'Basketball Shoes',
                url: '/shoes/Basketball'
            },
            {
                title: 'Football Shoes',
                url: '/shoes/Football'
            },
            {
                title: 'Gym & Training Shoes',
                url: '/shoes/GymAndTraining'
            },
            {
                title: 'Lifestyle Shoes',
                url: '/shoes/Lifestyle'
            }
        ]
    },
    {
        title: 'Clothing',
        children: [
            {
                title: 'All Clothing',
                url: '/clothing'
            },
            {
                title: 'Modest Wear',
                url: '/clothing/ModestWear'
            },
            {
                title: 'Hoodies & Pullovers',
                url: '/clothing/Hoodies-Pullovers'
            },
            {
                title: 'Shirts',
                url: '/clothing/Shirts'
            },
            {
                title: 'Jackets',
                url: '/clothing/Jackets'
            },
            {
                title: 'Shorts',
                url: '/clothing/Shorts'
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