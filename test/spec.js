const expect = require('chai').expect;

const pipelineSync= require('../index-sync');

const pipelineAsync= require('../index-async');

const fs = require('fs');

describe('pipeline synchronous', () => {
  // it('exists', ()=> {
  //   expect(pipelineSync()).to.be.ok;
  // })
  it('sets', () => {
    expect(pipelineSync('set 2')).to.eql(2)
  })
  it('adds',() => {
    expect(pipelineSync('set 2 | add 1')).to.eql(3)
  })
  it('multiplies', ()=> {
    expect(pipelineSync('set 0 | add 2 | mult 3')).to.eql(6)
  })
})

describe('pipeline asynchronous', () => {
  it('reads a file', () => {
    expect(pipelineAsync('set 1 | addFromFile ../foo.txt')).to.eql(1)
  })
})
