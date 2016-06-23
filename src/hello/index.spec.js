import helloWorld from './index';
import { expect } from 'chai';

describe('Example test suit', () => {
  it('should say hello world', () => {
    expect(helloWorld()).to.equal('Hello world! This is ES6 Prototype Boilerplate.');
  });
});
