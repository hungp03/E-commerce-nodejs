const userRouter = require("./user");
const productRouter = require("./product");
const { notFound, errHandler } = require("../middleware/errorHandler");
const productCategoryRouter = require("./productCategory");
const blogCategoryRouter = require("./blogCategory");
const blogRouter = require("./blog");
const brandRouter = require("./brand");
const couponRouter = require("./coupon");
const orderRouter = require('./order')
const insertRouter = require('./insert')
const initRoutes = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/productcategory", productCategoryRouter);
  app.use("/api/blogcategory", blogCategoryRouter);
  app.use("/api/blog", blogRouter);
  app.use("/api/brand", brandRouter);
  app.use("/api/coupon", couponRouter);
  app.use('/api/order', orderRouter);
  app.use('/api/insert', insertRouter);
  //Pass the error not found
  app.use(notFound);
  //Handler error
  app.use(errHandler);
};

module.exports = initRoutes;
