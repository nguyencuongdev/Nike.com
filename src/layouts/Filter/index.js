import classnames from 'classnames/bind';
import { useContext, forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TypesProduct, TypesShoes, ColorsList, SizeList, BrandList, TypesClothing }
    from './FilterContext';
import { FillterBrandsSelector, FillterGendersSelector, FillterSuitableSelector, FillterTypeSelector } from './FillterSelector';
import { actionsFillter } from './FillterSlice';
import { CheckIcon } from '~/components/Icon';

import styles from './Filter.module.css';
const cx = classnames.bind(styles);

function Filter({ ...props }, ref) {

    const typesProduct = useContext(TypesProduct);
    const typesShoesList = useContext(TypesShoes);
    const typesClothingList = useContext(TypesClothing);
    const colorsList = useContext(ColorsList);
    const sizeList = useContext(SizeList);
    const brandList = useContext(BrandList);

    const [menuTypes, setMenuTypes] = useState([]);
    const [shopByGenderValue, setShopByGenderValue] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        handleTypeContent();
        return () => {
            dispatch(actionsFillter.clearFilter());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleTypeContent() {
        let pathNameSplited = window.location.pathname.split('/');
        pathNameSplited.shift();
        //handle exception;
        if (pathNameSplited[pathNameSplited.length - 1] === '') pathNameSplited.pop();
        if (pathNameSplited.length === 1) return; //render all products;
        //handle type content

        //với pathName có 3 tham số;
        if (pathNameSplited.length === 3) {
            if (pathNameSplited[0] === 'products') {
                switch (pathNameSplited[1]) {
                    case 'shoes': {
                        //fillter for products is shoes matched with suitable;
                        setMenuTypes(typesShoesList);
                        dispatch(actionsFillter.changeType('shoes'));
                        dispatch(actionsFillter.addGender(pathNameSplited[2]));
                        return;
                    }
                    case 'clothing': {
                        setMenuTypes(typesClothingList);
                        //fillter for products is clothing matched with suitable;
                        dispatch(actionsFillter.changeType('clothing'));
                        dispatch(actionsFillter.addGender(pathNameSplited[2]));
                        return;
                    }
                    case 'accessories-equipment': {
                        //fillter for products is accessories-equipment matched with suitable;
                        dispatch(actionsFillter.changeType('accessories-equipment'));
                        dispatch(actionsFillter.addGender(pathNameSplited[2]));
                        return;
                    }
                    default: {
                        console.log('Content khong hop le');
                        return;
                    }
                }
            }
            else {
                switch (pathNameSplited[2]) {
                    case 'Women': {
                        dispatch(actionsFillter.addBrand(pathNameSplited[1]));
                        dispatch(actionsFillter.addGender(pathNameSplited[2]));
                        return;
                    }
                    case 'Men': {
                        dispatch(actionsFillter.addBrand(pathNameSplited[1]));
                        dispatch(actionsFillter.addGender(pathNameSplited[2]));
                        return;
                    }
                    default: {
                        console.log('Content không hợp lệ!');
                        return;
                    }
                }
            }
        }
        //với pathName có 2 tham số;
        else if (pathNameSplited.length === 2) {
            switch (pathNameSplited[0]) {
                case 'products': {
                    //fillter for products is shoes
                    if (pathNameSplited[1] === 'shoes') {
                        setMenuTypes(typesShoesList);
                        dispatch(actionsFillter.changeType('shoes'));
                        dispatch(actionsFillter.changeSuitable('All'));
                    }
                    else if (pathNameSplited[1] === 'clothing') {
                        //fillter for products is clothing
                        setMenuTypes(typesClothingList);
                        dispatch(actionsFillter.changeType('clothing'));
                        dispatch(actionsFillter.changeSuitable('All'));
                    }
                    else {
                        //fillter for accessories-equipment
                        dispatch(actionsFillter.changeType('accessories-equipment'));
                        dispatch(actionsFillter.changeSuitable('All'));

                    }
                    return;
                }
                case 'shopbybrand': {
                    //fillter for products by brand;
                    dispatch(actionsFillter.addBrand(pathNameSplited[1]));
                    return;
                }
                case 'shopbygender': {
                    //filter for products by gender
                    setShopByGenderValue(pathNameSplited[1]);
                    dispatch(actionsFillter.addGender(pathNameSplited[1]));
                    return;
                }
                default: {
                    console.log('Content khong hop le');
                    return;
                }
            }
        }
        else {
            //filter for products by type , gender, suitable for;
            dispatch(actionsFillter.changeType(pathNameSplited[1]));
            dispatch(actionsFillter.addGender(pathNameSplited[2]));
            dispatch(actionsFillter.changeSuitable(pathNameSplited[3]));
        }

    }

    const FillterRef = useRef(null);
    const brands = useSelector(FillterBrandsSelector);
    const gender = useSelector(FillterGendersSelector);
    const type_suitable = useSelector(FillterSuitableSelector);
    const type_product = useSelector(FillterTypeSelector);


    useImperativeHandle(ref, () => {
        return {
            onToggle: () => {
                let result = '';
                FillterRef.current.classList.toggle(cx('hidden'));
                (FillterRef.current.classList.contains(cx('hidden')))
                    ? (result = 'Show fillter')
                    : (result = 'Hidden fillter');
                return result;
            },
        }
    }, []);

    return (
        <div className={cx('fillter', 'col-lg-2')} ref={FillterRef} {...props}>
            {
                shopByGenderValue &&
                <ul className={cx('fillter-types-list')}>
                    {typesProduct.map((type, index) => {
                        return (
                            <li key={index} className={cx('fillter-types-item', {
                                'active': type.title.toLowerCase() === type_product
                            })}
                                data-title={type.title.toLowerCase()}
                                onClick={(e) => {
                                    let title = e.target.getAttribute('data-title');
                                    console.log(title)
                                    if (title !== type_product)
                                        dispatch(actionsFillter.changeType(title));
                                }}
                            >
                                {type.title}
                            </li>
                        )
                    })}
                </ul>
            }
            {menuTypes &&
                <ul className={cx('fillter-types-list')}>
                    {menuTypes.map((type, index) => {
                        return (
                            <li key={index} className={cx('fillter-types-item', {
                                'active': type.title === type_suitable
                            })}
                                onClick={(e) => {
                                    if (e.target.innerText !== type_suitable)
                                        dispatch(actionsFillter.changeSuitable(e.target.innerText));
                                }}
                            >
                                {type.title}
                            </li>
                        )
                    })}
                </ul>
            }
            <div className={cx('fillter-separator')}></div>
            {brandList &&
                <div className={cx('fillter-brands')}>
                    <button className={cx('btn-toggle-brand')} data-toggle='collapse' data-target='#brandlist'>
                        Brands
                        <span></span>
                    </button>
                    <div className={cx('row', 'collapse', 'show', 'fillter-brands-list')} id='brandlist'>
                        {brandList.map((brand, index) => {
                            return (
                                <div className={cx('fillter-brands-item')} key={index}>
                                    <input type='checkbox'
                                        checked={(brands.includes(brand))}
                                        value={brand}
                                        onChange={(e) => {
                                            let check = !e.target.checked;
                                            let value = e.target.value;
                                            (!check)
                                                ? dispatch(actionsFillter.addBrand(value))
                                                : dispatch(actionsFillter.cancelBrand(value));
                                        }}
                                    />
                                    <span className={cx('fillter-brands-title')}>{brand}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            <div className={cx('fillter-separator')}></div>
            {colorsList &&
                <div className={cx('fillter-colors', 'container-fluid', 'px-0')}>
                    <button className={cx('btn-toggle-color')} data-toggle='collapse' data-target='#colorlist'>
                        Colour
                        <span></span>
                    </button>
                    <div className={cx('row', 'collapse', 'show', 'fillter-colors-list')} id='colorlist'>
                        {colorsList.map((color, index) => {
                            return (
                                <div className={cx('fillter-colors-item', 'col-lg-4', 'px-0')} key={index}>
                                    <div className={cx('fillter-colors-value')}
                                        style={{ backgroundColor: color.value }}
                                        data-value={color.title}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            let element = e.target;
                                            while (!element.classList.contains(cx('fillter-colors-value'))) {
                                                element = element.parentNode;
                                            }
                                            let nameColor = element.getAttribute('data-value');
                                            if (element.classList.contains(cx('active'))) {
                                                element.classList.remove(cx('active'));
                                                dispatch(actionsFillter.cancelColor(nameColor));
                                            }
                                            else {
                                                element.classList.add(cx('active'));
                                                dispatch(actionsFillter.addColor(nameColor));
                                            }
                                        }}
                                    >
                                        <CheckIcon className={cx('fillter-colors-icon')} width='16px' height='16px'
                                        />
                                    </div>
                                    <span className={cx('fillter-colors-name')}

                                    >{color.title}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            <div className={cx('fillter-separator')}></div>
            {sizeList &&
                <div className={cx('fillter-sizes', 'container-fluid', 'px-0')}>
                    <button className={cx('btn-toggle-sizes', 'mx-0')} data-target='#sizelist' data-toggle='collapse'>
                        Sizes
                        <span></span>
                    </button>
                    <div className={cx('fillter-sizes-list', 'row', 'collapse', 'show')} id='sizelist'>
                        {sizeList.map((size, index) => {
                            return (
                                <div className={cx('fillter-sizes-item', 'col-4')} key={index}>
                                    <button className={cx('fillter-sizes-item_btn')}
                                        data-size={size}
                                        onClick={(e) => {
                                            let size = e.target.getAttribute('data-size');
                                            if (e.target.classList.contains(cx('active'))) {
                                                e.target.classList.remove(cx('active'));
                                                dispatch(actionsFillter.cancelSize(size));
                                            }
                                            else {
                                                e.target.classList.add(cx('active'));
                                                dispatch(actionsFillter.addSize(size));
                                            }
                                        }}
                                    >
                                        {size}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            <div className={cx('fillter-separator')}></div>
            <div className={cx('fillter-gender', 'container-fluid', 'px-0')}>
                <button className={cx('btn-toggle-gender', 'mx-0')} data-target='#genderlist' data-toggle='collapse'>
                    Gender
                    <span></span>
                </button>
                <div className={cx('fillter-gender-list', 'row', 'collapse', 'show')} id='genderlist'>
                    <div className={cx('fillter-gender-item')}>
                        <input type='checkbox' checked={(gender.includes('Men'))} value={'Men'}
                            onChange={(e) => {
                                let check = !e.target.checked;
                                let value = e.target.value;
                                (!check)
                                    ? dispatch(actionsFillter.addGender(value))
                                    : dispatch(actionsFillter.cancelGender(value));
                            }}
                        />
                        <span className={cx('fillter-gender-title')}>Men</span>
                    </div>
                    <div className={cx('fillter-gender-item')}>
                        <input type='checkbox' checked={(gender.includes('Women'))} value={'Women'}
                            onChange={(e) => {
                                let check = !e.target.checked;
                                let value = e.target.value;
                                (!check)
                                    ? dispatch(actionsFillter.addGender(value))
                                    : dispatch(actionsFillter.cancelGender(value));
                            }}

                        />
                        <span className={cx('fillter-gender-title')}>Women</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Filter);