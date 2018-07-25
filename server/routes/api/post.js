var keystone = require('keystone');

var Post = keystone.list('Post');

exports.list = function (req,res) {
    Post.model.find(function (err, items) {
        if (err) return res.apiError('database error', err);
        res.apiResponse({
            post: items,
        });
    }).limit(Number(req.query.limit));
};