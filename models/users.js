'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let schemaUser = Schema({
  fullname: String,
  username: String,
  email: String,
  password: String,
  salt: String
}, {
  timestamps: true
})

let User = mongoose.model('Users', schemaUser)

module.exports = User
