import classnames from 'classnames/bind';

import Image from '~/components/Image';
import Button from '~/components/Button';

import { ArrowLeftIcon, ArrowRightBoldIcon, HeartIcon, ArrowDownIcon } from '~/components/Icon';

import styles from './DetailProductPage.module.css';
const cx = classnames.bind(styles);

function DetailProductPage() {
    return (
        <div className={cx('row', 'content-detail')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-lg-7', 'container-fluid', 'content-detail-left')}>
                        <div className={cx('row')}>
                            <div className={cx('col-lg-2', 'content-detail-imgsDetail')}>
                                <div className={cx('content-detail-imgsDetail-item')}>
                                    <Image src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9ebb91d0-c0a6-4308-b973-60d50467d02e/air-max-systm-shoes-LWh69T.png' alt='img-detail' />
                                </div>
                                <div className={cx('content-detail-imgsDetail-item')}>
                                    <Image src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/63be0f3d-6157-4e3e-a678-f36ebc05f416/air-max-systm-shoes-LWh69T.png' alt='img-detail' />
                                </div>
                                <div className={cx('content-detail-imgsDetail-item')}>
                                    <Image src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa7161c6-7806-4267-ad37-4a183ed7ca49/air-max-systm-shoes-LWh69T.png' alt='img-detail' />
                                </div>
                                <div className={cx('content-detail-imgsDetail-item')}>
                                    <Image src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/41fb4e49-8c4f-429a-96f7-79459019008f/air-max-systm-shoes-LWh69T.png' alt='img-detail' />
                                </div>
                                <div className={cx('content-detail-imgsDetail-item')}>
                                    <Image src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e1fe0572-89c5-445e-94a3-fc5309050d0b/air-max-systm-shoes-LWh69T.png' alt='img-detail' />
                                </div>
                            </div>
                            <div className={cx('col-lg-10', 'content-detail-imgProduct')}>
                                <div className={cx('content-detail-imgProduct-img')}>
                                    <Image src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9ebb91d0-c0a6-4308-b973-60d50467d02e/air-max-systm-shoes-LWh69T.png' />
                                </div>
                                <div className={cx('content-detail-control')}>
                                    <button
                                        className={cx('content-detail-control-prev', 'content-detail-control-item')}>
                                        <ArrowLeftIcon width='8px' heihgt='8px' />
                                    </button>
                                    <button
                                        className={cx('content-detail-control-next', 'content-detail-control-item')}>
                                        <ArrowRightBoldIcon width='8px' heihgt='8px' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col-lg-5', 'content-detail-right')}>
                        <div className={cx('content-detail-infor')}>
                            <h2 className={cx('content-detail-title')}>Nike Air Max SYSTM</h2>
                            <h4 className={cx('content-detail-subTitle')}>Men's Shoes</h4>
                            <p className={cx('content-detail-price')}>2,779,000₫</p>
                        </div>
                        <div className={cx('content-detail-selectSize', 'container-fluid')}>
                            <div className={cx('row', 'content-detail-selectSize-list')}>
                                <div className={cx('content-detail-selectSize-item', 'col-lg-4')}>
                                    <button className={cx('content-detail-selectSize-btn')}>
                                        EU40
                                    </button>
                                </div>
                                <div className={cx('content-detail-selectSize-item', 'col-lg-4')}>
                                    <button className={cx('content-detail-selectSize-btn')}>
                                        EU40
                                    </button>
                                </div>
                                <div className={cx('content-detail-selectSize-item', 'col-lg-4')}>
                                    <button className={cx('content-detail-selectSize-btn')}>
                                        EU40
                                    </button>
                                </div>
                                <div className={cx('content-detail-selectSize-item', 'col-lg-4')}>
                                    <button className={cx('content-detail-selectSize-btn')}>
                                        EU40
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className={cx('content-detail-btn')}>
                            <div className={cx('content-detail-btn-group')}>
                                <Button classNameAdd={cx('content-detail-btn-addBag')} primary block
                                >
                                    Add to Bag
                                </Button>
                            </div>
                            <div className={cx('content-detail-btn-group')}>
                                <Button classNameAdd={cx('content-detail-btn-addBag')} outline block
                                    iconRight={<HeartIcon width='16px' height='16px' />}
                                >
                                    Favourite
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('content-detail-feature', 'col-lg-12')}>
                        <div className={cx('cotent-detail-feature-item')}>
                            <button className={cx('content-detail-feature-title')}
                                data-target="#description" data-toggle='collapse'
                            >
                                Description
                                <span className={cx('content-feature-icon')}>
                                    <ArrowDownIcon width='16px' height='16px' />
                                </span>
                            </button>
                            <div className={cx('collapse', 'show')} id="description">
                                <p className={cx('content-detail-feature-subtitle')}>The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.</p>
                                <ul className={cx('content-detail-feature-list')}>
                                    <li className={cx('content-detail-feature-list-item')}>
                                        Colour Shown: Photon Dust/White/Summit White/Malachite
                                    </li>
                                    <li className={cx('content-detail-feature-list-item')}>
                                        Style: FN7441-025
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={cx('cotent-detail-feature-item')}>
                            <button className={cx('content-detail-feature-title')}
                                data-target="#ship" data-toggle='collapse'
                            >
                                Free Delivery and Returns
                                <span className={cx('content-feature-icon')}>
                                    <ArrowDownIcon width='16px' height='16px' />
                                </span>
                            </button>
                            <div className={cx('collapse', 'show')} id="ship">
                                <p className={cx('content-detail-feature-subtitle')}>Your order of 5.000.000₫ or more gets free standard delivery.</p>
                                <ul className={cx('content-detail-feature-list')}>
                                    <li className={cx('content-detail-feature-list-item')}>
                                        Standard delivered 4-5 Business Days
                                    </li>
                                    <li className={cx('content-detail-feature-list-item')}>
                                        Express delivered 2-4 Business Days
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col-lg-12', 'content-detail-reviews')}>
                        <button className={cx('content-detail-reviews-btnToggle')}
                            data-target='#reviews' data-toggle='collapse'
                        >
                            <span>
                                Reviews
                                <span className={cx('content-detail-reviews-count')}> (0)</span>
                            </span>
                            <ArrowDownIcon height='16px' width='16px' />
                        </button>
                        <ul className={cx('content-detail-reviews-list')} id='reviews'></ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default DetailProductPage;