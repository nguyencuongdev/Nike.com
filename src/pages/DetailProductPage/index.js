import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import classnames from 'classnames/bind';

import { ProductService } from '~/services';
import Image from '~/components/Image';
import Button from '~/components/Button';
import ProductCard from '~/components/ProductCard';
import {
    ArrowLeftIcon, ArrowRightBoldIcon,
    HeartIcon, ArrowDownIcon,
    ArrowLeftLargeIcon, ArrowRightLargeIcon,
}
    from '~/components/Icon';

import styles from './DetailProductPage.module.css';
import { actionProduct } from '../ProductPage/ProductPageSlice';
import { productListSelector } from '../ProductPage/ProductSelector';
const cx = classnames.bind(styles);

function DetailProductPage() {
    const [product, setProduct] = useState(null);

    let pathName = window.location.pathname.split('/');
    if (pathName[pathName.length - 1] === '') pathName.pop();
    let id = pathName[pathName.length - 1];
    console.log(id);
    const dispatch = useDispatch();
    const productListForYou = useSelector(productListSelector);
    const slider = useRef(null);
    useEffect(() => {
        const getProductDetail = async (id) => {
            const res = await ProductService.getProductService('/productList/' + id);
            setProduct(res);
        }
        getProductDetail(id);
    }, [id])

    useEffect(() => {
        const getProduct = async () => {
            const res = await ProductService.getProductService('/productList/');
            dispatch(actionProduct.store(res.slice(0, 10)));
        }
        getProduct();
        return () => {
            dispatch(actionProduct.clearStore());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        //Nếu có product thì ta mới render ra detail infor của product
        <div className={cx('row', 'content-detail')}>
            {product &&
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-7', 'container-fluid', 'content-detail-left')}>
                            <div className={cx('row')}>
                                {/* hình ảnh mô tả chi tiết sản phẩm */}
                                {product?.imgDescription.length > 0 &&
                                    <div className={cx('col-lg-2', 'content-detail-imgsDetail')}>
                                        {product.imgDescription.map((img, index) =>
                                            <div className={cx('content-detail-imgsDetail-item')}
                                                key={index}
                                            >
                                                <Image src={img} alt='img-detail' />
                                            </div>
                                        )}
                                    </div>
                                }
                                {/* Hình ảnh chính của sản phẩm */}
                                <div className={cx('col', 'content-detail-imgProduct')}>
                                    <div className={cx('content-detail-imgProduct-img')}>
                                        <Image src={product?.img} alt='img-product' />
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
                            {/* name product */}
                            <div className={cx('content-detail-infor')}>
                                <h2 className={cx('content-detail-title')}>{product?.name}</h2>
                                <h4 className={cx('content-detail-subTitle')}>{product?.subTitle}</h4>
                                <p className={cx('content-detail-price')}>{product?.price}đ</p>
                            </div>
                            {/* img silimar */}
                            {product?.imgSimilar.length > 0 &&
                                <div className={cx('content-detail-imgSimilar', 'container-fluid')}>
                                    <h3 className={cx('content-detail-imgSimilar-title', 'row')}>
                                        Colors:
                                    </h3>
                                    <div className={cx('row')}>
                                        {product?.imgSimilar?.map((imgItem, index) =>
                                            <div className=
                                                {cx('col-lg-3', 'content-detail-imgSilimar-item')}
                                                key={index}
                                            >
                                                <Image src={imgItem} alt='imgSimilar-item' />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                            {/* list sizes của product */}
                            <div className={cx('content-detail-selectSize', 'container-fluid')}>
                                <h3 className={cx('row', 'content-detail-selectSize-title')}>
                                    Select Size
                                </h3>
                                {product?.sizes.length > 0 &&
                                    <div className={cx('row', 'content-detail-selectSize-list')}>
                                        {product?.sizes.map((size, index) =>
                                            <div key={index}
                                                className={cx('content-detail-selectSize-item', 'col-lg-4')}>
                                                <button className={cx('content-detail-selectSize-btn')}>
                                                    {size}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                }
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
                    {/* </div > */}
                    {/* infor detail về các tính năng của sản phẩm */}
                    <div div className={cx('row')} >
                        {
                            product?.detailProduct.length > 0 &&
                            <div className={cx('content-detail-feature', 'col-lg-12')}>
                                {product?.detailProduct.map((feature, index) =>
                                    <div className={cx('cotent-detail-feature-item')} key={index}>
                                        <button className={cx('content-detail-feature-title')}
                                            data-target={`#${feature?.id}`} data-toggle='collapse'
                                        >
                                            {feature?.title}
                                            <span className={cx('content-feature-icon')}>
                                                <ArrowDownIcon width='16px' height='16px' />
                                            </span>
                                        </button>
                                        <div className={cx('collapse', 'show')} id={feature?.id}>
                                            <p className={cx('content-detail-feature-subtitle')}>
                                                {feature?.subTitle}
                                            </p>
                                            {/* Danh sách các thông tin của tính năng đó */}
                                            {feature?.content &&
                                                <ul className={cx('content-detail-feature-list')}>
                                                    {feature?.content.split(/\n/).map((featureItem, index) =>
                                                        <li key={index}
                                                            className={cx('content-detail-feature-list-item')}
                                                        >
                                                            {featureItem}
                                                        </li>
                                                    )}
                                                </ul>
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        }
                    </div >
                    {/* Reviews */}
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
                    <div className={cx('row', 'content-productList-ForYou')}>
                        <div className={cx('col-lg-12', 'content-productList-ForYou-title')}>
                            <h4 className={cx('content-productList-ForYou-text')}>You Might Also Like</h4>
                            <div className={cx('slick-slider-controls')}>
                                <button className={cx('slick-slider-btn', 'slick-slider-btn-prev')}
                                    onClick={() => slider?.current?.slickPrev()}
                                >
                                    <ArrowLeftLargeIcon width='18px' height='18px' />
                                </button>
                                <button className={cx('slick-slider-btn', 'slick-slider-btn-next')}
                                    onClick={() => slider?.current?.slickNext()}
                                >
                                    <ArrowRightLargeIcon width='18px' height='18px' />
                                </button>
                            </div>
                        </div>
                        <div className={cx('col-lg-12', 'container-fluid', 'content-productList-ForYou-list')}>
                            {productListForYou.length > 0 &&
                                <Slider className={cx('row')} ref={slider}
                                    slidesToShow={4}
                                    slidesToScroll={4}
                                    autoplay
                                    autoplaySpeed={5000}
                                    swipe={false}
                                    arrows={false}
                                // adaptiveHeight
                                >
                                    {productListForYou?.map((productItem, index) => {
                                        return <ProductCard productImgSrc={productItem?.img}
                                            key={index}
                                            to={`/product/detail/${productItem.id}`} Ư
                                            productTitle={productItem?.name}
                                            productTypes={productItem?.subTitle}
                                            productPrice={productItem?.price}
                                            productColors={productItem?.colors}
                                            subProductImg={productItem?.imgSimilar}
                                            classNameAdd={cx('content-productList-item')}
                                        />
                                    })}
                                </Slider>
                            }
                        </div>
                    </div>
                </div >
            }
        </div >
    );
}

export default DetailProductPage;