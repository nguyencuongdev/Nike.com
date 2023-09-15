import classnames from 'classnames/bind';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductService } from '~/services';
import ProductCard from '~/components/ProductCard';

import { actionProduct } from './ProductPageSlice';
import { productListRemainingSelector } from './ProductSelector'

import styles from './Product.module.css';
const cx = classnames.bind(styles);


function ProductPage() {
    const dispatch = useDispatch();
    const dataProductList = useSelector(productListRemainingSelector);
    useEffect(() => {
        const getProduct = async () => {
            const productList = await ProductService.getProductService('/productList');
            dispatch(actionProduct.clearStore());//clears store product;
            dispatch(actionProduct.store(productList));
        }
        getProduct();
        return () => {
            dispatch(actionProduct.clearStore());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={cx('product', 'container-fluid', 'col',)}>
            <div className={cx('row', 'product-list')}>
                {dataProductList &&
                    dataProductList.map((product, index) =>
                        <div className={cx('product-card-item', 'col-lg-4')} key={index}>
                            <ProductCard to={`/products/details/${product.id}`}
                                productImgSrc={product.img}
                                productTitle={product.name}
                                productTypes={product.subTitle}
                                subProductImg={product.imgSimilar}
                                productPrice={product.price}
                                productColors={product.colors}
                            />
                        </div>
                    )
                }
            </div>
            {!dataProductList &&
                <div div className={cx('row')}>Không tìm thấy nội dung yêu cầu</div>
            }
        </div >
    )
}

export default memo(ProductPage);