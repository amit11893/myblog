var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');

//create a new keystone list called post
var Post = new keystone.List('Post', {
    autokey: { path: 'slug', from: 'name', unique: true },
    defaultSort: '-createdAt',
})

//adding the option to add an image to our Post from
var postImgStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        //required; path where the files should be stored
        path: keystone.expandPath('server/public/img'),
        generateFilename: function(file, index) {
            return file.originalname;
        },
        whenExists: 'error',
        //path where files will be served
        publicPath: '/public/img',
    },
});

//Finally we are gonna add the fields for our Post
Post.add({
    name: {
        type: String,
        required: true
    },
    state: {
        type: Types.Select,
        options: 'draft, published, archived',
        default: 'draft'
    },
    author: {
        type: Types.Relationship,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    publishedAt: Date,
    image: {
        type: Types.File,
        storage: postImgStorage,
        mimetype: '.jpeg, .jpg, .gif, .svg',
    },
    conceptList: {
        type: Types.Html,
        wysiwyg: true,
        height: 150
    },
    content: {
        type: Types.Html,
        wysiwyg: true,
        height: 500
    }
});

//setting the default order of the columns on the admin tab
Post.defaultColumns = 'name, state|20%, author, publishedAt|15%';
Post.register()