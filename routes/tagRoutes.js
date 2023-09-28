const express = require('express');
const tagController = require('./../controllers/tagController');
const authController = require('./../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(tagController.getAllTags)
  .post(
    authController.restrictTo('admin'),
    tagController.createTag
  );

router
  .route('/:id')
  .patch(
    authController.restrictTo('admin'),
    tagController.updateTag
  )
  .delete(
    authController.restrictTo('admin'),
    tagController.deleteTag
  );

router
  .route('/:slug')
  .get(tagController.getTagBySlug);

module.exports = router;
