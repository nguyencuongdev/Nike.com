import classnames from 'classnames/bind';

import ProductCard from '~/components/ProductCard';
import imgSimilar1 from '~/assets/images/similar_1.jpg';
import imgSimilar2 from '~/assets/images/similar_2.jpg';
import imgSimilar3 from '~/assets/images/similar_3.jpg';
import imgSimilar4 from '~/assets/images/smilar_4.jpg';

import styles from './Product.module.css';


const cx = classnames.bind(styles);

function ProductPage() {
    return (
        <div className={cx('product', 'container-fluid', 'col',)}>
            <div className={cx('row', 'product-list')}>
                <div className={cx('product-card-item', 'col-lg-4')}>
                    <ProductCard to='/products/details'
                        productImgSrc='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed71f213-14a5-4d5e-a0d8-1416208566b8/air-jordan-1-zoom-cmft-2-shoes-nX8Qqx.png'
                        productTitle='Jordan Max Aura 5'
                        productTypes="Men's Shoes"
                        subProductImg={[imgSimilar1, imgSimilar2, imgSimilar3, imgSimilar4]}
                        productPrice='3,999,999'
                    />
                </div>
                <div className={cx('product-card-item', 'col-lg-4')}>
                    <ProductCard to='/products/details'
                        productImgSrc='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed71f213-14a5-4d5e-a0d8-1416208566b8/air-jordan-1-zoom-cmft-2-shoes-nX8Qqx.png'
                        productTitle='Jordan Max Aura 5'
                        productTypes="Men's Shoes"
                        subProductImg={[imgSimilar1, imgSimilar2, imgSimilar3, imgSimilar4]}
                        productPrice='3,999,999'
                    />
                </div>
                <div className={cx('product-card-item', 'col-lg-4')}>
                    <ProductCard to='/products/details'
                        productImgSrc='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ed71f213-14a5-4d5e-a0d8-1416208566b8/air-jordan-1-zoom-cmft-2-shoes-nX8Qqx.png'
                        productTitle='Jordan Max Aura 5'
                        subProductImg={[imgSimilar1, imgSimilar2, imgSimilar3]}
                        productTypes="Men's Shoes"
                        productPrice='3,999,999'
                    />
                </div>
            </div>
        </div >
    )
}

export default ProductPage;