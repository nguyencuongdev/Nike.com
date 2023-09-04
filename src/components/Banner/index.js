import classnames from 'classnames/bind';

import styles from './Banner.module.css';

import BannerImg from '~/assets/images/Banner-nike-just-do-it.jpg';
console.log(BannerImg);
const cx = classnames.bind(styles);

function Banner({ children }) {
    return (
        <div className={cx('banner')}>
            <img src={BannerImg} alt='Lỗi' className={cx('banner-img')} />
        </div>
    );
}

export default Banner;