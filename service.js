var express = require('express'),
	engine = require('ejs-mate'),
	app = express();

// use ejs-locals for all ejs templates: 
app.engine('ejs', engine);
 
app.set('views',__dirname + '/source/view');
app.set('view engine', 'ejs');

//静态文件
app.use(express.static('dist'));

app.get('/',function(req,res,next){
  res.render('index', { title: '首页'});
});

app.get('/list',function(req,res,next){
  res.render('list', { title: '列表页'});
});

app.listen(3000, function() {
	console.log('server start: http://localhost:3000/')
});