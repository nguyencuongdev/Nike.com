import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import classnames from 'classnames/bind';

import { ProductService, CartService } from '~/services';

import Image from '~/components/Image';
import Button from '~/components/Button';
import ProductCard from '~/components/ProductCard';
import {
    ArrowLeftIcon, ArrowRightBoldIcon,
    HeartIcon, ArrowDownIcon,
    ArrowLeftLargeIcon, ArrowRightLargeIcon,
}
    from '~/components/Icon';

import { actionsCart } from '~/redux/cartSlice';
import { productListSelector } from '../ProductPage/ProductSelector';

import styles from './DetailProductPage.module.css';
const cx = classnames.bind(styles);


function DetailProductPage() {
    const [product, setProduct] = useState(null);
    const [sizeProductAddToCart, setSizeProductAddToCart] = useState('');
    const [colorProductAddToCart, setColorProductAddToCart] = useState('');

    let pathName = window.location.pathname.split('/');
    if (pathName[pathName.length - 1] === '') pathName.pop();
    let id = pathName[pathName.length - 1];
    const dispatch = useDispatch();
    const productListForYou = useSelector(productListSelector);

    const slider = useRef(null);
    const imgProductRef = useRef(null);
    const indexImgDetailProduct = useRef(0);

    useEffect(() => {
        const getProductDetail = async (id) => {
            const res = await ProductService.getProductService('/productList/' + id);
            setProduct(res);
        }
        getProductDetail(id);
    }, [id])

    return (
        //Nếu có product thì ta mới render ra detail infor của product
        <div className={cx('row', 'content-detail')}>
            {product &&
                <div className={cx('container')}>
                    <div className={cx('row')}>
                        <div className={cx('col-lg-7', 'container-fluid', 'content-detail-left')}>
                            <div className={cx('row')}>
                                {/* hình ảnh mô tả chi tiết sản phẩm */}
                                {product?.imgsProductDetail.length > 0 &&
                                    <div className={cx('col-lg-2', 'content-detail-imgsDetail')}>
                                        {product?.imgsProductDetail.map((img, index) =>
                                            <div className={cx('content-detail-imgsDetail-item')}
                                                key={index}
                                            >
                                                <Image src={img} alt='img-detail' index-value={index}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        let src = e.target?.src;
                                                        let index = +e.target.getAttribute('index-value');
                                                        imgProductRef.current.src = src;
                                                        indexImgDetailProduct.current = index;
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                }
                                {/* Hình ảnh chính của sản phẩm */}
                                <div className={cx('col', 'content-detail-imgProduct')}>
                                    <div className={cx('content-detail-imgProduct-img')}>
                                        <Image src={product?.img} alt='img-product' ref={imgProductRef} />
                                    </div>
                                    <div className={cx('content-detail-control')}>
                                        <button
                                            className={cx('content-detail-control-prev', 'content-detail-control-item')}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                let indexPrev = indexImgDetailProduct.current - 1;
                                                if (indexPrev === -1) {
                                                    indexPrev = product?.imgsProductDetail.length - 1;
                                                    indexImgDetailProduct.current = indexPrev;
                                                }
                                                else {
                                                    indexImgDetailProduct.current = indexPrev;
                                                }
                                                let srcImg = product?.imgsProductDetail[indexPrev];
                                                imgProductRef.current.src = srcImg;
                                            }}
                                        >
                                            <ArrowLeftIcon width='8px' heihgt='8px' />
                                        </button>
                                        <button
                                            className={cx('content-detail-control-next', 'content-detail-control-item')}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                let indexNext = indexImgDetailProduct.current + 1;
                                                if (indexNext === product?.imgsProductDetail.length) {
                                                    indexNext = 0;
                                                    indexImgDetailProduct.current = indexNext;
                                                }
                                                else {
                                                    indexImgDetailProduct.current = indexNext;
                                                }
                                                let srcImg = product?.imgsProductDetail[indexNext];
                                                imgProductRef.current.src = srcImg;
                                            }}
                                        >
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
                            {/* list imgs of product by color*/}
                            {product?.imgsProductByColor.length > 0 &&
                                <div className={cx('content-detail-imgSimilar', 'container-fluid')}>
                                    <h3 className={cx('content-detail-imgSimilar-title', 'row')}>
                                        Colors:
                                    </h3>
                                    <div className={cx('row')}>
                                        {product?.imgsProductByColor?.map((imgItem, index) =>
                                            <div className=
                                                {cx('col-lg-3', 'content-detail-imgSilimar-item')}
                                                key={index}
                                            >
                                                <Image src={imgItem?.src}
                                                    className={cx('content-detail-imgSilimar-img', {
                                                        'active': colorProductAddToCart === imgItem.typeColor
                                                    })}
                                                    alt='imgSimilar-item' data-value={imgItem?.typeColor}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (!e.target.classList.contains(cx('active'))) {
                                                            let color = e.target.getAttribute('data-value');
                                                            imgProductRef.current.src = e.target.getAttribute('src');
                                                            indexImgDetailProduct.current = -1;
                                                            setColorProductAddToCart(color);
                                                            return;
                                                        }
                                                        e.target.classList.remove(cx('active'));
                                                        setColorProductAddToCart('');
                                                    }}
                                                />
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
                                                <button className={cx('content-detail-selectSize-btn',
                                                    {
                                                        'active': sizeProductAddToCart === size
                                                    }
                                                )}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (!e.target.classList.contains(cx('active'))) {
                                                            let size = e.target.innerText;
                                                            setSizeProductAddToCart(size);
                                                            return;
                                                        }
                                                        e.target.classList.remove(cx('active'));
                                                        setSizeProductAddToCart('');
                                                    }}
                                                >
                                                    {size}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                            <div className={cx('content-detail-btn')}>
                                <div className={cx('content-detail-btn-group')}>
                                    <Button classNameAdd={cx('content-detail-btn-addBag')}
                                        primary block
                                        disable={!(colorProductAddToCart !== '' &&
                                            sizeProductAddToCart !== '')}
                                        onClick={(e) => {
                                            const productAddToCart = {
                                                name: product?.name,
                                                subType: product?.subTitle,
                                                color: colorProductAddToCart,
                                                size: sizeProductAddToCart,
                                                price: product?.price,
                                                img: imgProductRef.current.src,
                                                quanlity: 1,
                                            }
                                            dispatch(actionsCart.addProductToCart(productAddToCart));
                                            const addProductToCartInDB = async (product) => {
                                                await CartService.addProductToCartService('/cart', product);
                                                alert('Added product to cart');
                                            }
                                            addProductToCartInDB(productAddToCart);
                                            imgProductRef.current.src = product?.img;
                                            setColorProductAddToCart('');
                                            setSizeProductAddToCart('');
                                        }}
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
                    {/* infor detail về sản phẩm */}
                    <div className={cx('row')} >
                        {
                            product?.inforProductDetail.length > 0 &&
                            <div className={cx('content-detail-feature', 'col-lg-12')}>
                                {product?.inforProductDetail.map((feature, index) =>
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
                                            href={`/product/detail/${productItem.id}`}
                                            productTitle={productItem?.name}
                                            subProductTitle={productItem?.subTitle}
                                            productPrice={productItem?.price}
                                            productColors={productItem?.colors}
                                            imgsProductByColor={productItem?.imgsProductByColor}
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