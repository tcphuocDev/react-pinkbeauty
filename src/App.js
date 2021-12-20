import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./asset/Scss/grid.scss";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Policy from "./pages/HomePage/Policy/Policy";
import Transport from "./pages/HomePage/Transport/Transport";
import Pay from "./pages/HomePage/Pay/Pay";
import CategoryDetail from "./pages/Category/CategoryDetail";
import dataCategory from "./ListDataCategory";
import data from "./ListProduct";
import dataMenu from "./ListMenuData";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
function App() {
  const { categorys } = dataCategory;
  const { products } = data;
  const { listsmenu } = dataMenu;

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage
                products={products}
                categorys={categorys}
                listsmenu={listsmenu}
              />
            }
          />
          <Route
            path="/chinh-sach-doi-tra"
            exact
            element={<Policy categorys={categorys} listsmenu={listsmenu} />}
          />
          <Route
            path="/phi-giao-hang"
            exact
            element={<Transport categorys={categorys} listsmenu={listsmenu} />}
          />
          <Route
            path="/thanh-toan"
            exact
            element={<Pay categorys={categorys} listsmenu={listsmenu} />}
          />
          <Route
            path="/product-detail/:slug.:id.html"
            exact
            element={
              <ProductDetail
                categorys={categorys}
                listsmenu={listsmenu}
                products={products}
              />
            }
          />
          <Route
            path="/category-detail/:slug.:id.html"
            element={
              <CategoryDetail
                categorys={categorys}
                products={products}
                listsmenu={listsmenu}
              />
            }
          />
          <Route
            path="/cart-page"
            exact
            element={<Cart categorys={categorys} listsmenu={listsmenu} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
