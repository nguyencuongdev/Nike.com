import classnames from 'classnames/bind';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ProductCard from '~/components/ProductCard';
import imgSimilar1 from '~/assets/images/similar_1.jpg';
import imgSimilar2 from '~/assets/images/similar_2.jpg';
import imgSimilar3 from '~/assets/images/similar_3.jpg';
import imgSimilar4 from '~/assets/images/smilar_4.jpg';

import styles from './Product.module.css';


const cx = classnames.bind(styles);

function ProductPage() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/shoes')
            .then((res) => {
                return res.data;
            })
            .then((data) => {
                console.log(data);
                setProductList(data);
            })
            .catch((err) => console.log(err));

    }, []);

    return (
        <div className={cx('product', 'container-fluid', 'col',)}>
            <div className={cx('row', 'product-list')}>
                {productList &&
                    productList.map((product, index) =>
                        <div className={cx('product-card-item', 'col-lg-4')} key={index}>
                            <ProductCard to='/products/details'
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
        </div >
    )
}

export default ProductPage;