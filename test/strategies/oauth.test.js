var OAuthStrategy = require('../../lib/strategies/oauth');


describe('OAuth2Strategy', function() {
    
  var strategy = new OAuthStrategy({
      requestTokenURL: 'https://www.example.com/oauth/request_token',
      accessTokenURL: 'https://www.example.com/oauth/access_token',
      userAuthorizationURL: 'https://www.example.com/oauth/authorize',
      consumerKey: 'ABC123',
      consumerSecret: 'secret'
    }, function() {});
    
  it('should be named oauth', function() {
    expect(strategy.name).to.equal('oauth');
  });
  
  it('constructed without a verify callback', function() {
    expect(function() {
      new OAuthStrategy({
        requestTokenURL: 'https://www.example.com/oauth/request_token',
        accessTokenURL: 'https://www.example.com/oauth/access_token',
        userAuthorizationURL: 'https://www.example.com/oauth/authorize',
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      });
    }).to.throw(TypeError, 'OAuthStrategy requires a verify callback');
  });
  
  it('constructed without a requestTokenURL option', function() {
    expect(function() {
      new OAuthStrategy({
        accessTokenURL: 'https://www.example.com/oauth/access_token',
        userAuthorizationURL: 'https://www.example.com/oauth/authorize',
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      }, function() {});
    }).to.throw(TypeError, 'OAuthStrategy requires a requestTokenURL option');
  });
  
  it('constructed without a accessTokenURL option', function() {
    expect(function() {
      new OAuthStrategy({
        requestTokenURL: 'https://www.example.com/oauth/request_token',
        userAuthorizationURL: 'https://www.example.com/oauth/authorize',
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      }, function() {});
    }).to.throw(TypeError, 'OAuthStrategy requires a accessTokenURL option');
  });
  
  it('constructed without a userAuthorizationURL option', function() {
    expect(function() {
      new OAuthStrategy({
        requestTokenURL: 'https://www.example.com/oauth/request_token',
        accessTokenURL: 'https://www.example.com/oauth/access_token',
        consumerKey: 'ABC123',
        consumerSecret: 'secret'
      }, function() {});
    }).to.throw(TypeError, 'OAuthStrategy requires a userAuthorizationURL option');
  });
  
  it('constructed without a consumerKey option', function() {
    expect(function() {
      new OAuthStrategy({
        requestTokenURL: 'https://www.example.com/oauth/request_token',
        accessTokenURL: 'https://www.example.com/oauth/access_token',
        userAuthorizationURL: 'https://www.example.com/oauth/authorize',
        consumerSecret: 'secret'
      }, function() {});
    }).to.throw(TypeError, 'OAuthStrategy requires a consumerKey option');
  });
  
  it('constructed without a consumerSecret option', function() {
    expect(function() {
      new OAuthStrategy({
        requestTokenURL: 'https://www.example.com/oauth/request_token',
        accessTokenURL: 'https://www.example.com/oauth/access_token',
        userAuthorizationURL: 'https://www.example.com/oauth/authorize',
        consumerKey: 'ABC123'
      }, function() {});
    }).to.throw(TypeError, 'OAuthStrategy requires a consumerSecret option');
  });
  
  it('constructed with a consumerSecret as empty string', function() {
    expect(function() {
      new OAuthStrategy({
        requestTokenURL: 'https://www.example.com/oauth/request_token',
        accessTokenURL: 'https://www.example.com/oauth/access_token',
        userAuthorizationURL: 'https://www.example.com/oauth/authorize',
        consumerKey: 'ABC123',
        consumerSecret: ''
      }, function() {});
    }).to.not.throw();
  });
  
});
