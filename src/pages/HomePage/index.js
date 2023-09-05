import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';


import Banner from '~/components/Banner';
import styles from './HomePage.module.css';
const cx = classnames.bind(styles);

function HomePage() {
    return (
        <div className={cx('content')}>
            <div className={cx('content-one')}>
                <div className={cx('content-img')}>
                    <Banner />
                </div>
                <div className={cx('content-body')}>
                    <p className={cx('content-subitlte')}>Just In</p>
                    <h2 className={cx('content-title')}>
                        Nike Ready Pack
                    </h2>
                    <p className={cx('content-text')}>
                        The season is here. Start yours prepared with the best in touch, agility, precision and speed.
                    </p>
                    <div className={cx('d-flex', 'justify-content-center')}>
                        <Link className={cx('content-btn')}>Shop All</Link>
                    </div>
                </div>
            </div>
            <div className={cx('content-two')}>

            </div>
        </div>
    )
}

export default HomePage;