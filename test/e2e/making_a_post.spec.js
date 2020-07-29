const chai = require( 'chai' );
chai.use( require( 'chai-as-promised' ) );
const expect = chai.expect;

describe( 'making a post', function() {
  it( 'should log in and create a post', function( done) {
    this.timeout( 1e4 );
    // go to homepage
    browser.get( 'http://localhost:3001' );
    // click 'login'
    element( by.css( 'nav .login' ) ).click();
    // fill out and submit login form
    element( by.model( 'username' ) ).sendKeys( 'dickeyxxx' );
    element( by.model( 'password' ) ).sendKeys( 'pass' );
    element( by.css( 'form .btn' ) ).click();
    // submit a new post on the posts page
    const post = `my test post ${Math.random()}`;
    element( by.model( 'postBody' ) ).sendKeys( post );
    element( by.css( 'form .btn' ) ).click();

    // the user should now see their post as the first post on the page
    expect( element.all( by.css( 'ul.list-group li' ) ).first().getText() ).to.eventually.contain( post );

    done();
  });
});