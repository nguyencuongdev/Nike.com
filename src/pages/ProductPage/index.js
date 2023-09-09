import classnames from 'classnames/bind';

import styles from './Product.module.css';
const cx = classnames.bind(styles);

function ProductPage() {
    return (
        <div className={cx('content', 'container-fluid', 'col-lg-10')}>
            Product page
        </div>
    )
}

export default ProductPage;