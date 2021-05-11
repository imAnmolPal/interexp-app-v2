const express=require('express');
const Article = require('./../models/article')
const router = express.Router();


router.get('/new', function(req,res){
  res.render('articles/new', { article: new Article() });
});

router.get('/:slug', async (req,res) =>{
  const article = await Article.findOne({slug: req.params.slug});
  if(article== null){
    res.redirect('/')
  }
  res.render('articles/show', {article: article})
});

router.get('/admin/:slug', async (req,res) =>{
  const article = await Article.findOne({slug: req.params.slug});
  if(article== null){
    res.redirect('/')
  }
  res.render('articles/showAdmin', {article: article})
});
// edit for admin <a href="/articles/edit/<%= article.id %>" class="btn btn-info">Edit</a>
router.post('/', async (req,res)=>{
  let article = new Article({
    title : req.body.title,
    description : req.body.description,
    markdown : req.body.markdown
  })
  try {
    article = await article.save();
    res.redirect(`/articles/admin/${article.slug}`)
  }catch (e){
      console.log(e);
      res.render('articles/new', {article: article})
  }
});

module.exports = router;
