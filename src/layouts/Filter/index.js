import classnames from 'classnames/bind';
import { useContext } from 'react';

import { TypesShoes, ColorsList, SizeList, BrandList } from './FilterContext';
import styles from './Filter.module.css';
const cx = classnames.bind(styles);

export default function Filter() {
    const typesShoes = useContext(TypesShoes);
    const colorsList = useContext(ColorsList);
    const sizeList = useContext(SizeList);
    const brandList = useContext(BrandList);

    return (
        <div className={cx('fillter', 'col-lg-2')}>
            {typesShoes &&
                <ul className={cx('fillter-types-list')}>
                    {typesShoes.map((type, index) => {
                        return (
                            <li key={index} className={cx('fillter-types-item')}>{type.title}</li>
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
                                    <input type='checkbox' />
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
                                    <div className={cx('filter-colors-value')}
                                        style={{ backgroundColor: color.value }}>
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
                                    <button className={cx('fillter-sizes-item_btn')}>{size}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
            <div className={cx('fillter-separator')}></div>
            {sizeList &&
                <div className={cx('fillter-gender', 'container-fluid', 'px-0')}>
                    <button className={cx('btn-toggle-gender', 'mx-0')} data-target='#genderlist' data-toggle='collapse'>
                        Gender
                        <span></span>
                    </button>
                    <div className={cx('fillter-gender-list', 'row', 'collapse', 'show')} id='genderlist'>
                        <div className={cx('fillter-gender-item')}>
                            <input type='checkbox' />
                            <span className={cx('fillter-gender-title')}>Nam</span>
                        </div>
                        <div className={cx('fillter-gender-item')}>
                            <input type='checkbox' />
                            <span className={cx('fillter-gender-title')}>Nữ</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}