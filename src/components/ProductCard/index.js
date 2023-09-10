import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useRef, Fragment } from 'react';

import styles from './ProductCard.module.css';
import Image from '~/components/Image';
const cx = classnames.bind(styles);

function ProductCard({
    to = '',
    classNameAdd, productImgSrc, productTitle, productTypes,
    productPrice = '0', productColors = [], subProductImg = [], ...propsAdd
}) {
    const className = cx('card', 'product-card', classNameAdd);

    const props = {
        className,
        ...propsAdd
    }

    const ImgSrc = useRef(productImgSrc);
    const productRef = useRef(null);
    const productImgSimilarRef = useRef(null);
    const productInforRef = useRef(null);


    function handleShowImgSimilar(e) {
        const imgsrc = e.target?.src;
        const productImg = productRef.current.querySelector('img');
        productImg.src = imgsrc;
    }

    function handleHiddenImgSimilar() {
        const productImg = productRef.current.querySelector('img');
        productImg.src = ImgSrc.current;
    }

    function handleMouseOverProductCard() {
        productImgSimilarRef.current.style.display = 'block';
        productInforRef.current.style.display = 'none';
    }

    function handleMouseOutProductCard() {
        productImgSimilarRef.current.style.display = 'none';
        productInforRef.current.style.display = 'block';
    }

    return (
        <Link to={to} {...props} ref={productRef}
            onMouseOver={handleMouseOverProductCard}
            onMouseOut={handleMouseOutProductCard}
        >
            <Image src={productImgSrc} className={cx('card-img-top', 'product-card-img')} alt="product-card" />
            <div className={cx('card-body', 'product-card-infomation', 'px-0')} ref={productInforRef}>
                <h3 className={cx('card-title', 'product-card-title')}>{productTitle}</h3>
                <h4 className={cx('product-card-types')}>{productTypes}</h4>
                <p className={cx('product-card-colors')}>
                    {(productColors) ? 'Không xác định' : productColors.lenght} Colours
                </p>
                <p className={cx('product-card-price', 'card-text')}>{productPrice}đ</p>
            </div>
            <div className={cx('card-body', 'product-card-ImgSimilar', 'px-0')} ref={productImgSimilarRef}>
                {subProductImg &&
                    <div className={cx('product-card-ImgSimilar-list')}>
                        {(subProductImg.length > 3) ?
                            <Fragment>
                                <div className={cx('product-card-ImgSimilar-item')}>
                                    <Image src={subProductImg[0]} alt='img 1'
                                        onMouseOver={(e) => handleShowImgSimilar(e)}
                                        onMouseOut={handleHiddenImgSimilar}
                                    />
                                </div>
                                <div className={cx('product-card-ImgSimilar-item')}>
                                    <Image src={subProductImg[1]} alt='img 2'
                                        onMouseOver={(e) => handleShowImgSimilar(e)}
                                        onMouseOut={handleHiddenImgSimilar}
                                    />
                                </div>
                                <div className={cx('product-card-ImgSimilar-item')}>
                                    <Image src={subProductImg[2]} alt='img 3'
                                        onMouseOver={(e) => handleShowImgSimilar(e)}
                                        onMouseOut={handleHiddenImgSimilar}
                                    />
                                </div>
                                <div className={cx('product-card-ImgSimilar-item')}>
                                    <span>+{subProductImg.length - 3}</span>
                                </div>
                            </Fragment>
                            :
                            subProductImg.map((img, index) => {
                                return <div className={cx('product-card-ImgSimilar-item')} key={index}>
                                    <Image src={img} alt={`img ${index}`}
                                        onMouseOver={(e) => handleShowImgSimilar(e)}
                                        onMouseOut={handleHiddenImgSimilar}
                                    />
                                </div>
                            })
                        }
                    </div>
                }
                <h3 className={cx('card-title', 'product-card-title')}>{productTitle}</h3>
                <p className={cx('product-card-price', 'card-text')}>{productPrice}</p>
            </div>
        </Link>
    )
}

export default ProductCard;