const mongoose = require('mongoose');
const slugify = require('slugify');

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tag must have a name'],
      unique: true,
      trim: true,
    },
    slug: String,
    description: {
      type: String,
      trim: true
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
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
tagSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Tag = mongoose.model('Tag', tagSchema);
module.exports = Tag;