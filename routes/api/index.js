var express = require('express')
var router = express.Router()
var Article = require('../../controller/article')
var User = require('../../controller/user')
var Seeder = require('../../seeders/seeder')

router.get('/users', User.getUsers)
router.get('/user/:username', User.getUser)
router.post('/user', User.newUser)
router.put('/user/:username', User.updateUser)
router.delete('/user/:username', User.removeUser)

router.get('/articles', Article.getArticles)
router.get('/article/:id', Article.getArticle)
router.post('/article', Article.newArticle)
router.put('/article/:id', Article.updateArticle)
router.delete('/article/:id', Article.removeArticle)

// Seeding
router.post('/user/seed', Seeder.newUser)
router.post('/article/seed', Seeder.newArticle)

module.exports = router
