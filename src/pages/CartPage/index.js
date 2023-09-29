import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartSelector } from './cartSelector';
import Image from '~/components/Image';
import Input from '~/components/Input';
import Button from '~/components/Button';


import {
    HeartIcon, DeleteIcon
} from '~/components/Icon';
import styles from './CartPage.module.css';
const cx = classnames.bind(styles);

function CartPage() {

    const productsInCart = useSelector(cartSelector);

    return (
        <div className={cx('cart', 'container')}>
            <div className={cx('row')}>
                <div className={cx('col-lg-8', 'cart-infor')}>
                    <h2 className={cx('cart-title')}>Cart</h2>
                    <div className={cx('cart-list')}>
                        {productsInCart.length > 0 &&
                            productsInCart?.map((product, index) => {
                                return (
                                    <div className={cx('cart-item')} key={index}>
                                        <Link
                                            to={`/product/detail/${product.id}`}
                                            className={cx('cart-link', 'd-block', 'containter-fluid')}
                                        >
                                            <div className={cx('row')}>
                                                <div className={cx('cart-item-img', 'col-lg-3')}>
                                                    <Image
                                                        src={product?.img}
                                                        alt='img-product'
                                                    />
                                                </div>
                                                <div className={cx('col-lg-9', 'cart-item-infor')}>
                                                    <div className={cx('cart-item-group', 'd-flex', 'justify-content-between', 'align-items-center')}>
                                                        <h4 className={cx('cart-item-name')}>
                                                            {product?.name}</h4>
                                                        <span className={cx('cart-item-price')}>
                                                            {product?.price}
                                                        </span>
                                                    </div>
                                                    <p className={cx('cart-item-subTitle')}>
                                                        {product?.subTitle}
                                                    </p>
                                                    <p className={cx('cart-item-color')}>
                                                        Color: {product?.color}
                                                    </p>
                                                    <div className={cx('cart-item-group', 'd-flex',
                                                        'align-items-center', 'justify-content-between')}
                                                    >
                                                        <div className={cx('cart-item-sizes', 'd-flex', 'align-items-center')}>
                                                            <span className={cx('cart-item-sizes-title')}>Size: </span>
                                                            <select className={cx('cart-item-sizes-selected')}
                                                                value={product?.size}>
                                                                <option value='35'>35</option>
                                                                <option value='35'>36</option>
                                                                <option value='35'>37</option>
                                                                <option value='35'>38</option>
                                                                <option value='35'>39</option>
                                                                <option value='35'>40</option>
                                                            </select>
                                                        </div>
                                                        <div className={cx('cart-item-quantity', 'd-flex', 'align-items-center')}>
                                                            <span className={cx('cart-item-quantity-title')}>Quantity: </span>
                                                            <div className={cx('d-flex', 'align-items-center', 'ml-1')}>
                                                                <Button
                                                                    classNameAdd={cx('cart-item-quantity-btn')}
                                                                >
                                                                    -
                                                                </Button>
                                                                <Input type='text'
                                                                    classNameAdd={cx('cart-item-quanity-value')} name="quantity"
                                                                    value={product?.quantity}
                                                                />
                                                                <Button
                                                                    classNameAdd={cx('cart-item-quantity-btn', 'mx-0')}
                                                                >
                                                                    +
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('cart-item-action')}>
                                                        <Button
                                                            classNameAdd={cx('cart-item-action-favourite', 'cart-item-action-btn')}
                                                        >
                                                            <HeartIcon />
                                                        </Button>
                                                        <Button
                                                            classNameAdd={cx('cart-item-action-delete', 'cart-item-action-btn')}>
                                                            < DeleteIcon />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={cx('col-lg-4', 'cart-payment')}>
                    <h2 className={cx('cart-payment-title')}>Payment</h2>
                    <h4 className={cx('cart-payment-subtotal')}>
                        Subtotal
                        <span className={cx('cart-payment-money')}>111123123đ</span>
                    </h4>
                    <h4 className={cx('cart-payment-ship')}>
                        Estimated Delivery & Handling
                        <span className={cx('cart-payment-money')}>250,000₫</span>
                    </h4>
                    <div className={cx('cart-payment-separate')}></div>
                    <h4 className={cx('cart-payment-total')}>
                        Total
                        <span className={cx('cart-payment-money')}>111123123đ</span>
                    </h4>
                    <Button block classNameAdd={cx('cart-payment-btn')}
                    >
                        Member Checkout
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartPage;