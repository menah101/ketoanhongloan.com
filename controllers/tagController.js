const Tag = require('./../models/tagModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

exports.getTagBySlug = catchAsync(async (req, res, next) => {
  let result = await Tag.findOne({slug: req.params.slug})
  res.status(200).json({
    status: 'success',
    data: {
      data: result
    }
  });
});

exports.getAllTags = factory.getAll(Tag);
exports.getTag = factory.getOne(Tag);
exports.createTag = factory.createOne(Tag);
exports.updateTag = factory.updateOne(Tag);
exports.deleteTag = factory.deleteOne(Tag);

