const expect = require('chai').expect;

const pipelineSync = require('../index');

describe('pipeline synchronous', () => {
  it('exists', ()=> {
    expect(pipelineSync()).to.eql(4);
  })
})
