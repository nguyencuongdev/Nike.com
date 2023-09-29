import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import { Navbar, Form, FormControl } from 'react-bootstrap';

import Button from '~/components/Button';
import ProductCard from '~/components/ProductCard';
import { SearchIcon, CrossIcon } from '~/components/Icon';

import styles from './Search.module.css';
const cx = classnames.bind(styles);
function Search() {
    return (
        <div className={cx('search')}>
            <div className={cx('search-overlay')}></div>
            <div className={cx('search-container')}>
                <header className={cx('header')}>
                    <Navbar bg='light' className={cx('navbar')}>
                        <Link to='/' className={cx('navbar-brand')}>
                            <svg aria-hidden="true" className="pre-logo-svg" focusable="false" viewBox="0 0 24 24" role="img">
                                <path fill="currentColor" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z">
                                </path>
                            </svg>
                        </Link>
                        <Form className={cx('navbar-form')} >
                            <Button className={cx('navbar-form-btn', 'navbar-form-btn-search')}>
                                <SearchIcon />
                            </Button>
                            <FormControl type='text' placeholder='Search' className={cx('navbar-form-value')} />
                            <Button className={cx('navbar-form-btn', 'navbar-form-btn-cancel')}>
                                <CrossIcon />
                            </Button>
                        </Form>
                        <button className={cx('navbar-btn-cancel')}>Cancel</button>
                    </Navbar>
                </header>
                <main className={cx('content')}>
                    <div className={cx('content-topSearch')}>
                        <h2 className={cx('content-topSearch-title')}>Top Search</h2>
                        <Link className={cx('content-topSearch-item')}
                            to='/products/Shoes'
                        >
                            Shoes
                        </Link>
                        <Link className={cx('content-topSearch-item')}
                            to='/products/Clothing'
                        >
                            Clothing
                        </Link>
                        <Link className={cx('content-topSearch-item')}
                            to='/products/Accessories-Equipment'
                        >
                            Accessories-Equipment
                        </Link>
                    </div>
                    <div className={cx('content-search-result', 'container-fluid')}>
                        <div className={cx('row', 'row-cols-5')}>
                            <div className={cx('content-search-item')}>
                                <Link className={cx('content-search-link')}>
                                    <ProductCard productImgSrc={'https://static.nike.com/a/images/t_default/da68e143-88fc-4973-a9c6-0954a8e24389/sb-skate-t-shirt-3KcnZg.png'}
                                        productTitle='Nike SB'
                                        subProductTitle='Men shoes'
                                        productPrice='111000đ'
                                    />
                                </Link>
                            </div>
                            <div className={cx('content-search-item')}>
                                <Link className={cx('content-search-link')}>
                                    <ProductCard productImgSrc={'https://static.nike.com/a/images/t_default/da68e143-88fc-4973-a9c6-0954a8e24389/sb-skate-t-shirt-3KcnZg.png'}
                                        productTitle='Nike SB'
                                        subProductTitle='Men shoes'
                                        productPrice='111000đ'
                                    />
                                </Link>
                            </div>
                            <div className={cx('content-search-item')}>
                                <Link className={cx('content-search-link')}>
                                    <ProductCard productImgSrc={'https://static.nike.com/a/images/t_default/da68e143-88fc-4973-a9c6-0954a8e24389/sb-skate-t-shirt-3KcnZg.png'}
                                        productTitle='Nike SB'
                                        subProductTitle='Men shoes'
                                        productPrice='111000đ'
                                    />
                                </Link>
                            </div>
                            <div className={cx('content-search-item')}>
                                <Link className={cx('content-search-link')}>
                                    <ProductCard productImgSrc={'https://static.nike.com/a/images/t_default/da68e143-88fc-4973-a9c6-0954a8e24389/sb-skate-t-shirt-3KcnZg.png'}
                                        productTitle='Nike SB'
                                        subProductTitle='Men shoes'
                                        productPrice='111000đ'
                                    />
                                </Link>
                            </div>
                            <div className={cx('content-search-item')}>
                                <Link className={cx('content-search-link')}>
                                    <ProductCard productImgSrc={'https://static.nike.com/a/images/t_default/da68e143-88fc-4973-a9c6-0954a8e24389/sb-skate-t-shirt-3KcnZg.png'}
                                        productTitle='Nike SB'
                                        subProductTitle='Men shoes'
                                        productPrice='111000đ'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Search;