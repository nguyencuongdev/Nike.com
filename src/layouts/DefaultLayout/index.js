import classnames from 'classnames/bind';
import styles from './Default.module.css';

import Header from '../Header';
import Footer from '../Footer';
import Filter from '../Filter';


const cx = classnames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('content container-fluid px-0')}>
                <Filter />
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default DefaultLayout;