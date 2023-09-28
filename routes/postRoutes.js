const express = require('express');
const postController = require('./../controllers/postController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(postController.getAllPosts)
  .post(
    authController.restrictTo('admin'),
    postController.uploadPostImages,
    postController.resizePostImages,
    postController.createPost
  );

router
  .route('/:id')
  .patch(
    authController.restrictTo('admin'),
    postController.uploadPostImages,
    postController.resizePostImages,
    postController.updatePost
  )
  .delete(
    authController.restrictTo('admin'),
    postController.deletePost
  );

router
  .route('/:slug')
  .get(postController.getPostBySlug);

module.exports = router;
