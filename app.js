const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

app.set('view engine', 'ejs');

app.use('/articles',articleRouter)
app.get('/', function(req,res){

  const articles = [
    {
    title: 'test Article',
    createdAt: new Date(),
    description: 'Test description'
  },
  {
    title: 'test Article 2',
    createdAt: new Date(),
    description: 'Test description 2'
  }]
  res.render('admin', {articles: articles});
});
app.get('/index', function(req,res){

  const articles = [{
    title: 'test Article',
    createdAt: new Date(),
    description: 'Test description'
  }]
  res.render('index', {articles: articles});
});
app.listen(3000);
