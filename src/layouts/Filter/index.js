import classnames from 'classnames/bind';
import { useContext } from 'react';

import { TypesShoes, ColorsList } from './FilterContext';
import styles from './Filter.module.css';
const cx = classnames.bind(styles);

export default function Filter() {
    const typesShoes = useContext(TypesShoes);
    const colorsList = useContext(ColorsList);

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
            {colorsList &&
                <div className={cx('fillter-colors', 'container')}>
                    <div className={cx('row')}>
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
        </div>
    )
}