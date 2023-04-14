var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const dotenv = require('dotenv');
dotenv.config({path: "./config.env"});
// 環境變數存在 process.env
const DB = process.env.DATABASE
	.replace(
		'<password>',
		process.env.DATABASE_PASSWORD
	).replace(
		'<collection>',
		process.env.COLLECTION_NAME
	)

// 資料庫設定
const mongoose = require('mongoose');
mongoose.connect(DB)
    .then(res=> console.log("連線資料成功"));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// 路由第一層設定在此：
// 例：如果進入 "/users"，就會往 usersRouter(./routes/users) 檔案裡面找下一層子路徑
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
