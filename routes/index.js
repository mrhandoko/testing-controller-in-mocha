var express = require('express')
var router = express.Router()
var Article = require('../controller/article')
var User = require('../controller/user')

router.get('/users', User.getUsers)
router.get('/user/:id', User.getUser)
router.post('/user', User.newUser)
router.put('/user/:id', User.updateUser)
router.delete('/user/:id', User.removeUser)

router.get('/articles', Article.getArticles)
router.get('/article/:id', Article.getArticle)
router.post('/article', Article.newArticle)
router.put('/article/:id', Article.updateArticle)
router.delete('/article/:id', Article.removeArticle)

module.exports = router
