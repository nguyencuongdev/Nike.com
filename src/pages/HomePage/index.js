import classnames from 'classnames/bind';

import styles from './HomePage.module.css';
const cx = classnames.bind(styles);

function HomePage() {
    return (
        <div className={cx('content')}>
            Home page
        </div>
    )
}

export default HomePage;