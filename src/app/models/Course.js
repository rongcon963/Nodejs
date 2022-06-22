const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 255, required: true },
    description: {type: String, maxLength: 600 },
    image: { type: String, maxLength:255 },
    slug: { type: String, slug: 'name', unique: true },
    videoId: {type: String, maxLength: 255, required: true },
    level: {type: String, maxLength: 255 },
}, {
    timestamps: true,
});

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: 'all' 
});

module.exports = mongoose.model('Course', Course);