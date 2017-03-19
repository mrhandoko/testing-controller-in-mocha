let chai = require('chai')
let chaiHttp = require('chai-http')
let should = chai.should()

chai.use(chaiHttp)

describe('Testing Article', () => {
  it('It should GET all articles title', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/articles')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('array')
        done()
      })
  })

  it('It should POST an article', (done) => {
    chai.request('http://localhost:3000/api')
      .post('/article')
      .send({
        title: 'Melakukan Type Conversion di JavaScript',
        image: 'https://www.codepolitan.com/uploads/image/source/1/javascript-cover-image(700x350-crop).jpg',
        content: 'Ini halaman content lho....',
        category: 'Technology',
        slug: 'melakukan-type-conversion-di-javaScript'
      })
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })

  it('It should GET/:slug an article by the given slug', (done) => {
    chai.request('http://localhost:3000/api')
      .get('/article/melakukan-type-conversion-di-javaScript')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })

  it('It should PUT/:slug an article by the given slug', (done) => {
    chai.request('http://localhost:3000/api')
      .put('/article/melakukan-type-conversion-di-javaScript')
      .send({
        title: 'Melakukan Type Conversion di JavaScript 008',
        image: 'https://www.codepolitan.com/uploads/image/source/1/javascript-cover-image(700x350-crop).jpg',
        content: 'Ini halaman content yang udah di edit lho....',
        category: 'Technology',
        slug: 'melakukan-type-conversion-di-javaScript-8'
      })
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })

  it('It should DELETE/:slug an article by the given slug', (done) => {
    chai.request('http://localhost:3000/api')
      .delete('/article/hello-world')
      .end((error, response) => {
        response.should.have.status(200)
        response.body.should.be.a('object')
        done()
      })
  })
})
