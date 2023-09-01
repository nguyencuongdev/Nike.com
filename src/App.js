import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
