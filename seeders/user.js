'use strict'

let Model = require('../models/articles')

Seeder = {}

Seeder.newArticle = (req, res, next) => {
  Model.create({
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
    category: req.body.category,
    slug: slug(req.body.title).toLowerCase()
  }).then((data) => {
    res.send(data)
  })
}
