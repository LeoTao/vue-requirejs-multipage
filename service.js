var express = require('express'),
	engine = require('ejs-mate'),
	app = express();

// use ejs-locals for all ejs templates: 
app.engine('ejs', engine);
 
app.set('views',__dirname + '/source/view');
app.set('view engine', 'ejs');

app.get('/',function(req,res,next){
  res.render('index', { title: '首页'});
});

app.listen(3000);