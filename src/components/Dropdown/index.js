import { forwardRef, useRef, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import classnames from 'classnames/bind';

import PropperWrapper from '~/components/PropperWrapper';

import styles from './Dropdown.module.css';
const cx = classnames.bind(styles);

function Dropdown({ menuItems }, ref) {
    const dropDownRef = useRef(null);

    const className = cx('dropdown-menu', 'h-100', 'hidden', {
    })

    useImperativeHandle(ref, () => {
        return {
            onShow: () => {
                dropDownRef.current.classList.remove(styles.hidden);
            },
            onHidden: () => {
                dropDownRef.current.classList.add(styles.hidden);
            }
        }
    }, []);

    function handleHidden() {
        dropDownRef.current.classList.add(styles.hidden);
    }

    function handleShow() {
        dropDownRef.current.classList.remove(styles.hidden);
    }

    return (
        <div className={className} ref={dropDownRef}
            onMouseOut={handleHidden}
            onMouseOver={handleShow}
        >
            <PropperWrapper container>
                <div className={cx('menu', 'col', 'px-0')}>
                    <h2 className={cx('menu-header')}>
                        New Featured
                    </h2>
                    <ListGroup as='ul'>
                        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>New Arrivals</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Lastest Shoes</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Lastest Clothing</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Customise with Nike By You</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Bestsellers</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Member Exclusive</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>National Team Kits</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0', 'menu-item')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Top Kicks Under 3,000,000₫</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className={cx('menu', 'col', 'px-0')}>
                    <h2 className={cx('menu-header')}>
                        Shop Icons
                    </h2>
                    <ListGroup as='ul'>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Air Force 1</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Air Jordan 1</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Air Max</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Dunk</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Blazer</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Pegasus</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className={cx('menu', 'col', 'px-0')}>
                    <h2 className={cx('menu-header')}>
                        New For Men
                    </h2>
                    <ListGroup as='ul'>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Shoes</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Clothing</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Accessories</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Shop All New</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className={cx('menu', 'col', 'px-0')}>
                    <h2 className={cx('menu-header')}>
                        New For Women
                    </h2>
                    <ListGroup as='ul'>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Shoes</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Clothing</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Accessories</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Shop All New</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className={cx('menu', 'col', 'px-0')}>
                    <h2 className={cx('menu-header')}>
                        New For Kids
                    </h2>
                    <ListGroup as='ul'>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Shoes</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Clothing</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Accessories</Link>
                        </ListGroup.Item>
                        <ListGroup.Item className={cx('border-0')} as='li'>
                            <Link to='/nenws' className={cx('menu-link')}>Shop All New</Link>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </PropperWrapper>
        </div>
    )
}

export default forwardRef(Dropdown);