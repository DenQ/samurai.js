'use strict';
const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

lab.test('returns true when 1 + 1 equals 2', (done) => {

    setTimeout(() => {
        Code.expect(1+1).to.equal(2);
        done();
    }, 1000);

});