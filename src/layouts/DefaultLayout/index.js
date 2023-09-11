import { useState, useRef } from 'react';
import classnames from 'classnames/bind';

import { FilterIcon } from '~/components/Icon';

import Header from '~/layouts/Header';
import Footer from '~/layouts/Footer';
import Filter from '~/layouts/Filter';

import { handleFormatTitle } from '~/helper';

import styles from './Default.module.css';
const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    const [sortByValue, setSortByValue] = useState('Price: Hight-Low');
    // eslint-disable-next-line no-unused-vars
    const [titleContent, setTitleContent] = useState(() => {
        const titleSplited = window.location.pathname;
        let title = handleFormatTitle(titleSplited);
        return title;
    });

    const [btnToggleFillterValue, setBtnToggleFillterValue] = useState('Hidden fillter');

    const optionSortByRef = useRef(null);
    const fillterRef = useRef(null);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('main', 'container-fluid')}>
                <div className={cx('row', 'main-TitleAndSort')}>
                    <h2 className={cx('main-title')}>
                        {titleContent}
                        <span className={cx('main-title-count')}> (434)</span>
                    </h2>
                    <div className={cx('main-sortby')}>
                        <button className={cx('btn-toggle-fillter')} onClick={() => {
                            console.log(fillterRef.current);
                            let result = fillterRef.current.onToggle();
                            setBtnToggleFillterValue(result);
                        }}>
                            {btnToggleFillterValue}
                            <FilterIcon />
                        </button>
                        <div className={cx('main-dropdown-menu')}>
                            <button className={cx('btn-toggle-dropmenu')}
                                onClick={() => optionSortByRef.current.classList.toggle(cx('hidden'))}
                            >
                                Sort by:
                                <span className={cx('sorby-value')}>{sortByValue}</span>
                            </button>
                            <ul className={cx('dropdownMenu', 'hidden')} ref={optionSortByRef}>
                                <li className={cx('dorpdown-menu-item')}
                                    value='desc'
                                    onClick={(e) => {
                                        console.log(e.target.textContent);
                                        setSortByValue(e.target.textContent);
                                        optionSortByRef.current.classList.toggle(cx('hidden'));
                                    }}
                                >
                                    Price: Hight-Low
                                </li>
                                <li className={cx('dorpdown-menu-item')}
                                    value='asc'
                                    onClick={(e) => {
                                        console.log(e.target.textContent);
                                        setSortByValue(e.target.textContent);
                                        optionSortByRef.current.classList.toggle(cx('hidden'));
                                    }}
                                >
                                    Price: Low-Hight
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <Filter classNameAdd={cx('col-lg-2')} ref={fillterRef} />
                    {children}
                </div>
            </main >
            <Footer />
        </div >
    )
}
export default DefaultLayout;