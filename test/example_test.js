var client = require('webdriverio')
var assert = require('assert')
var should = require('should');

var branchName = process.env.TRAVIS_BRANCH
var branchUrl = 'http://cicdqaws-' + branchName + '.herokuapp.com'

describe('Home page tests', function() {
    it('Header is correct', function() {
        browser.url(branchUrl)
        browser.getText('h1').should.equal('My Site')
    });
});
