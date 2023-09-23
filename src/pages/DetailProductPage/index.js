import { useState, useEffect } from 'react';
import Slider from "react-slick";
import classnames from 'classnames/bind';

import { ProductService } from '~/services';
import Image from '~/components/Image';
import Button from '~/components/Button';
import ProductCard from '~/components/ProductCard';
import { ArrowLeftIcon, ArrowRightBoldIcon, HeartIcon, ArrowDownIcon } from '~/components/Icon';

import styles from './DetailProductPage.module.css';
const cx = classnames.bind(styles);

function DetailProductPage() {
    const [product, setProduct] = useState(null);

    let pathName = window.location.pathname.split('/');
    if (pathName[pathName.length - 1] === '') pathName.pop();
    let id = pathName[pathName.length - 1];

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
                            <div className={cx('content-detail-infor')}>
                                <h2 className={cx('content-detail-title')}>{product?.name}</h2>
                                <h4 className={cx('content-detail-subTitle')}>{product?.subTitle}</h4>
                                <p className={cx('content-detail-price')}>{product?.price}đ</p>
                            </div>
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
                    {/* infor detail về các tính năng của sản phẩm */}
                    <div className={cx('row')}>
                        {product?.detailProduct.length > 0 &&
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
                    {/* <div className={cx('row')}>
                    <div className={cx('col-lg-12')}>\
                        {productListForYou.length > 0 &&
                            <Slider>
                                {productListForYou?.map((productItem, index) => {
                                    return <ProductCard productImgSrc={productItem?.img}
                                        key={index}
                                        productTitle={productItem?.name}
                                        productTypes={productItem?.subTitle}
                                        productPrice={productItem?.price}
                                    />
                                })}
                            </Slider>
                        }
                    </div>
                </div> */}
                </div>
            }
        </div >
    );
}

export default DetailProductPage;