var express = require('express');
var router = express.Router();
const Post = require('../models/postsModel');

// 取得所有 post
router.get('/', async function(req, res, next) {
    const posts = await Post.find();
    res.status(200).json({
        posts: posts
    })
});

// 新增一筆 post
router.post('/', async function(req, res, next) {
    // req.body 可以取得接收到的參數
    // 建議 create 把欄位都列出來，不要直接新增整個 req.body，避免 sql injection
    const newPost = await Post.create({
        name: req.body.name,
        content: req.body.content,
    });
    res.status(200).json({
        status: "success",
        posts: newPost
    })
});



module.exports = router;
