const catchAsync = require('../utils/catchAsync');

// -------- CLIENT -------- //
exports.getOverview = catchAsync( async (req, res, next) => {
  res.status(200).render('index', {
    title: 'Kế toán hồng loan',
  });
});

// render blog
exports.getBlog = catchAsync( async (req, res, next) => {
  res.status(200).render('blog');
});

// render blog detail
exports.getBlogDetail = catchAsync( async (req, res, next) => {
  res.status(200).render('blog-detail');
});

// render account service
exports.getAccountService = catchAsync( async (req, res, next) => {
  res.status(200).render('account-service');
});

// render me
exports.getProfile= catchAsync( async (req, res, next) => {
  res.status(200).render('profile');
});

// render tag
exports.getTag= catchAsync( async (req, res, next) => {
  res.status(200).render('tag');
});

// -------- ADMIN -------- //
// render admin (index)
exports.getLogin= catchAsync( async (req, res, next) => {
  res.status(200).render('login');
});

// render admin (index)
exports.getDashboard= catchAsync( async (req, res, next) => {
  res.status(200).render('admin/index');
});

// render admin (post index)
exports.getAdminPost= catchAsync( async (req, res, next) => {
  res.status(200).render('admin/post/index');
});

// render admin (post create)
exports.getAdminPostCreate= catchAsync( async (req, res, next) => {
  res.status(200).render('admin/post/create');
});

// render admin (post edit)
exports.getAdminPostEdit= catchAsync( async (req, res, next) => {
  res.status(200).render('admin/post/edit');
});

// render admin (tag index)
exports.getAdminTag= catchAsync( async (req, res, next) => {
  res.status(200).render('admin/tag/index');
});

// render admin (tag create)
exports.getAdminTagCreate= catchAsync( async (req, res, next) => {
  res.status(200).render('admin/tag/create');
});

// render admin (tag edit)
exports.getAdminTagEdit= catchAsync( async (req, res, next) => {
  res.status(200).render('admin/tag/edit');
});

