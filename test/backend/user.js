let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()

chai.use(chaiHttp)

describe('Testing User CRUD Function', () => {
  it('It should GET all users', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/users')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('array')
        done()
      })
  })

  it('It should POST an user', (done) => {
    chai.request('http://localhost:3000/api')
      .post('/user')
      .send({
        fullname: 'usertest',
        username: 'usertest',
        email: 'usertest@usertest.com',
        password: 'usertest'
        salt: 'usertest'
      })
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })

  it('It should GET/:id an user by the given id', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/user/')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        response.body.should.have.property('fullname')
        response.body.should.have.property('username')
        response.body.should.have.property('email')
        response.body.should.have.property('password')
        done()
      })
  })

  it('It should PUT/:id an user by the given id', (done) => {
    chai.request('http://localhost:3000/api')
      .put('/user/mrhandoko')
      .send({
        fullname: 'usertest1',
        username: 'usertest1',
        email: 'usertest1@usertest.com',
        password: 'usertest1'
        salt: 'usertest1'
      })
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })

  it('It should DELETE/:id an user by the given id', (done) => {
    chai.request('http://localhost:3000/api')
      .delete('/user/mrhandoko')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })
})
