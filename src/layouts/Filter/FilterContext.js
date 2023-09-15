
import { createContext } from 'react';

export const TypesProduct = createContext([
    {
        title: 'Shoes',
        url: 'shoes'
    },
    {
        title: 'Clothing',
        url: 'clothing'
    },
    {
        title: 'Accessories & Equipment',
        url: 'Accessories & Equipment'
    }
])

export const TypesShoes = createContext([
    {
        title: 'All',
        url: '/shoes'
    },
    {
        title: 'Lifestyle',
        url: '/shoes/Lifestyle'
    },
    {
        title: 'Running',
        url: '/shoes/Running'
    },
    {
        title: 'Basketball',
        url: '/shoes/Basketball'
    },
    {
        title: 'Football',
        url: '/shoes/Football'
    },
    {
        title: 'Training & Gym',
        url: '/shoes/Training & Gym'
    },
    {
        title: 'Skateboarding',
        url: '/shoes/Skateboarding'
    },
    {
        title: 'Baseball',
        url: '/shoes/Baseball'
    },
    {
        title: 'Golf',
        url: '/shoes/Golf'
    },
    {
        title: 'Tennis',
        url: '/shoes/Tennis'
    },
    {
        title: 'Athletics',
        url: '/shoes/Athletics'
    },
    {
        title: 'Walking',
        url: '/shoes/Walking'
    }

])

export const TypesClothing = createContext([
    {
        title: 'All',
        url: '/clothing'
    },
    {
        title: 'Tops & T-Shirts',
        url: '/clothing/Tops & T-Shirts'
    },
    {
        title: 'Hoodies & Sweatshirts',
        url: '/clothing/Hoodies- & Sweatshirts'
    },
    {
        title: 'Jackets',
        url: '/clothing/Jackets'
    },
    {
        title: 'Trousers & T-Shirts',
        url: '/clothing/Trousers & T-Shirts'
    },
    {
        title: 'Tracksuits',
        url: '/clothing/Tracksuits'
    },
    {
        title: 'Shorts',
        url: '/clothing/Shorts'
    },
    {
        title: 'Commpressiion & Baselayer',
        url: '/clothing/Commpression & Baselayer'
    },
    {
        title: 'Shocks',
        url: '/clothing/Shocks'
    }
])

export const TypesClothingOfWoment = [
    {
        title: 'Sports Bras',
        url: '/clothing/Sports Bars'
    },
    {
        title: 'Jumpsuits & Rompers',
        url: '/clothing/Jumpsuits & Rompers'
    },
    {
        title: 'Skirts & Dresses',
        url: '/clothing/Skirts & Dresses'
    },
    {
        title: 'Bodysuits',
        url: '/clothing/Bodysuits'
    }
]

export const ColorsList = createContext([
    {
        title: 'Black',
        value: '#000'
    },
    {
        title: 'Blue',
        value: '#1790C8'
    },
    {
        title: 'Brown',
        value: '#825D41'
    },
    {
        title: 'Orange',
        value: '#F36B26'
    }
])

export const BrandList = createContext([
    'Nike', 'Jordan', 'ACG'
])

export const SizeList = createContext([
    '33.5', '34.5', '35.5', '36', '36,5', '38', '39', '40', '40.5'
])