import classnames from 'classnames/bind';


import Header from '../Header';
import Footer from '../Footer';

import styles from './OnlyHeaderLayout.module.css';
const cx = classnames.bind(styles);

function OnlyHeaderLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('container')}>
                {children}
            </main>
            <Footer />
        </div>
    )
}


export default OnlyHeaderLayout;