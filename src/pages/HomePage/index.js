import classnames from 'classnames/bind';

import Banner from '~/components/Banner';
import Media from '~/components/Media';

import BannerImg from '~/assets/images/Banner-nike-just-do-it.jpg';
import BannerImg2 from '~/assets/images/Banner-nike-3.jpg';
import BannerImg3 from '~/assets/images/Banner-nike-2.jpg';
import Media1 from '~/assets/images/media1.png';
import Media2 from '~/assets/images/media2.png';

import styles from './HomePage.module.css';
const cx = classnames.bind(styles);

function HomePage() {
    return (
        <div className={cx('content')}>
            <div className={cx('content-item')}>
                <Banner title='Nike Ready Pack' img={{ src: BannerImg }}
                    subtitle='Just in'
                    text='The season is here. Start yours prepared with the best in touch, agility, precision and speed.'
                    button={{ title: 'Shop All', to: '/shop' }}
                />
            </div>
            <div className={cx('content-item')}>
                <h3>Just In</h3>
                <Banner title='SABRINA’S LAWS OF THE GAME' img={{ src: BannerImg2 }}
                    text='Sabrina Ionescu’s basketball journey has been nothing short of iconic. From neighborhood pickup games to breakout college star to No. 1 draft pick with her own signature shoe. Now she’s laying down her Laws of the Game, so every hooper can follow in her footsteps. Ready? Let’s go.'
                    button={{ title: 'Shop', to: '/shop' }}
                />
            </div>
            <div className={cx('content-item')}>
                <h3>Gear Up</h3>
                <Banner text='With unreal speed combined with a grip and fit that can keep your feet on the ground at a reality-bending pace, the Kylian Mbappé Mercurial takes fast into unknown dimensions.' img={{ src: BannerImg3 }}
                    subtitle='Unreal Speed'
                    title='KYLIAN MBAPPÉ MERCURIAL'
                    button={{ title: 'Shop', to: '/shop' }}
                />
            </div>
            <div className={cx('content-item', 'container-fluid', 'px-0')}>
                <h3>Featured</h3>
                <div className={cx('row', 'content-media')}>
                    <Media img={{ src: Media1 }} classNameAdd={cx('content-media-item', 'col')}></Media>
                    <Media img={{ src: Media2 }} classNameAdd={cx('content-media-item', 'col')}></Media>
                </div>
            </div>
        </div>
    )
}

export default HomePage;