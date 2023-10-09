const mongoose = require('mongoose');
const slugify = require('slugify');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A post must have a title'],
      unique: true,
      trim: true,
      maxlength: [60, 'A post name must have less or equal then 60 characters'],
      minlength: [10, 'A post name must have more or equal then 10 characters']
    },
    slug: String,
    description: {
      type: String,
      trim: true
    },
    metaDescription: {
      type: String,
      required: [true, 'A post must have a meta description'],
      trim: true,
      maxlength: [160, 'A post meta description must have less or equal then 160 characters'],
    },
    metaKeywords: {
      type: String,
      required: [true, 'A post must have a meta keywords'],
      trim: true,
      maxlength: [160, 'A post meta keywords must have less or equal then 160 characters'],
    },
    thumbnail: {
      type: String,
      default: 'thumbnail-default.jpg',
      required: [true, 'A post must have a thumbnail image']
    },
    content: String,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    tag: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tag'
    },
    views: {
      type: Number,
      default: 0
    },
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    },
  }
);

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
postSchema.pre('save', function(next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;