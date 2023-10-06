const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('./../controllers/authController');
const router = express.Router();

// Client
router.get('/',
  viewsController.getOverview
);
router.get('/blog', viewsController.getBlog);
router.get('/blog/:slug', viewsController.getBlogDetail);
router.get('/dich-vu-ke-toan', viewsController.getAccountService);
router.get('/me', viewsController.getProfile);
router.get('/tag/:name', viewsController.getTag);
// Admin
router.get('/login', authController.isLoggedIn, viewsController.getLogin);
router.get('/admin',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getDashboard
);
router.get('/admin/post',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminPost
);
router.get('/admin/post/create',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminPostCreate
);
router.get('/admin/post/edit',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminPostEdit,
);
router.get('/admin/tag',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminTag
);
router.get('/admin/tag/create',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminTagCreate
);
router.get('/admin/tag/edit',
  authController.protect,
  authController.restrictTo('admin'),
  viewsController.getAdminTagEdit
);

module.exports = router;
