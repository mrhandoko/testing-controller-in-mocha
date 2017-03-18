'use strict'

let Article = require('../models/articles')
let User = require('../models/users')

const crypto = require('crypto')
const slug = require('slug')

let Seeder = {}

// Get random numbers
function randomSalt () {
  var text = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for ( var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))

  return text
}

let secret = randomSalt()
let hash = crypto.createHmac('sha256', secret).update('satepadang').digest('hex')

Seeder.newUser = (req, res, next) => {
  User.create({
    fullname: 'Bambang Handoko',
    username: 'mrhandoko',
    email: 'bambang.handoko12@gmail.com',
    password: hash,
    salt: secret
  }).then((data) => {
    res.send(data)
  })
}

Seeder.newArticle = (req, res, next) => {
  Article.create({
    title: 'Hello World',
    image: 'Hello World',
    content: 'Hello World',
    category: 'Hello World',
    slug: slug('Hello World').toLowerCase()
  }).then((data) => {
    res.send(data)
  })
}

module.exports = Seeder
