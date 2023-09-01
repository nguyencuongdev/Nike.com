import classnames from 'classnames/bind';


import styles from './Footer.module.css'
const cx = classnames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            Footer
        </footer>
    )
}

export default Footer;