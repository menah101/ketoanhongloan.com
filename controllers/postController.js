const multer = require('multer');
const sharp = require('sharp');
const Post = require('./../models/postModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadPostImages = upload.fields([
  { name: 'thumbnail', maxCount: 1 },
]);

exports.resizePostImages = catchAsync(async (req, res, next) => {
  if (!req.files.thumbnail) return next();
  const { originalname } = req.files.thumbnail[0];
  const filename = originalname.split('.')[0];
  const fileType = originalname.split('.')[1];

  // 1) Cover image
  req.body.thumbnail = `${filename}_${Date.now()}.${fileType}`;
  await sharp(req.files.thumbnail[0].buffer)
    .toFile(`public/images/posts/${req.body.thumbnail}`);

  next();
});

exports.getPostBySlug = catchAsync(async (req, res, next) => {
  let result = await Post.findOne({slug: req.params.slug})
  res.status(200).json({
    status: 'success',
    data: {
      data: result
    }
  });
});

exports.getAllPosts = factory.getAll(Post);
exports.createPost = factory.createOne(Post);
exports.updatePost = factory.updateOne(Post);
exports.deletePost = factory.deleteOne(Post);

