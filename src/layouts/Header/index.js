import classnames from 'classnames/bind';


import styles from './Header.module.css';
const cx = classnames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            Header
        </header>
    )
}

export default Header;