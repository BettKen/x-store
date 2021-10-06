const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

// configure chai
chai.use(chaiHttp)
chai.should()

describe('make sure that the status is 200', () => {
  it('it should retutn 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
})

describe('Make sure register fails on no data', () => {
  it('should return 400', (done) => {
    chai.request(app)
      .post('/register')
      .end((err, res) => {
        res.should.have.status(400)
        // res.body.should.be.a('object')
        done()
      })
  })
})
