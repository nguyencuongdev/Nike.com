import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionsCart } from '~/redux/cartSlice';
import { actionProduct } from '~/pages/ProductPage/ProductPageSlice';
import { CartService, ProductService } from '~/services';
import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsInCart = async () => {
      const data = await CartService.getProductsTFromCartService('/cart');
      dispatch(actionsCart.storeCart(data));
    }
    getProductsInCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      const productList = await ProductService.getProductService('/productList');
      dispatch(actionProduct.clearStore());//clears store product;
      dispatch(actionProduct.store(productList));
    }
    getProduct();
    // return () => {
    //     dispatch(actionProduct.clearStore());
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              let Layout = DefaultLayout;

              if (route.layout)
                Layout = route.layout;
              else if (route.layout === null)
                Layout = Fragment;

              const Page = route.component;
              return (
                <Route key={index} path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />)
            })}
          <Route path="*" element={<span>Error Page</span>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
