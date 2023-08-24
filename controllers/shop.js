const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows,fieldData])=>{//when u get data from mysql two items are coming in array, 1st ur data, 
    //2nd metadta typ ka kuch oh needed nai h toh fielddata remove bhi kr skte ho
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Shop Product List',
      path: '/product-list',  
    });
  })
};

exports.getShopIndex = (req, res, next) => {
  Product.fetchAll().then(([rows,fieldData])=>{
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'All Shop Product List',
      path: '/product-list',  
    });
  })
};

exports.getMyCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'My Cart',
    path: '/cart',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'My Checkout',
    path: '/checkout',
  });
};

exports.getMyOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'My Orders',
    path: '/orders',
  });
};

exports.getProductDetails = (req, res, next) => {
  const productId = req.params.productId;
  // filter the data using the product id and send that product to view
  Product.findProductById(productId).then(([product])=>{

    res.render('shop/product-details', {
      pageTitle: 'My Product Details',
      path: '/product-details',
      product: product[0],
    });
  }).catch()
};
