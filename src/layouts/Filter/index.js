import classnames from 'classnames/bind';

import styles from './Filter.module.css';
const cx = classnames.bind(styles);

export default function Filter({ children }) {
    return (
        <div className={cx('footer')}>
            {children}
        </div>
    )
}