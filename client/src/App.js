import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home, Public, Services, ProductDetail, FAQ, Blogs, Products } from "./pages/public";
import { getCategories } from "./store/app/asyncActions";
import path from "./ultils/path";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  
  return (
    <div className="min-h-screen font-main">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />}></Route>
          <Route path={path.PRODUCTS} element={<Products />}></Route>
          <Route path={path.BLOGS} element={<Blogs />}></Route>
          <Route path={path.FAQ} element={<FAQ />}></Route>
          <Route path={path.PRODUCT_DETAIL__PID__TITLE} element={<ProductDetail />}></Route>
          <Route path={path.OUR_SERVICES} element={<Services />}></Route>
        </Route>
        <Route path={path.LOGIN} element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
