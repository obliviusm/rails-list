import { test } from 'qunit';
import moduleForAcceptance from 'rails-list/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | sign up');

test('visiting /sign-up', function(assert) {
  visit('/sign-up');

  andThen(function() {
    assert.equal(currentURL(), '/sign-up');
    assert.equal(find("h2").text(), 'Sign Up');
  });
});

test('registers user', function(assert) {
  const email = `test${Date.now()}@test.com`;
  const pass = "password";

  visit('/sign-up');

  fillIn(".email input", email);
  fillIn(".password input", pass);
  fillIn(".password-confirmation input", pass);
  click("button[type=submit]");

  andThen(function() {
    assert.equal(currentURL(), '/login');
    assert.equal(find("h2").text(), 'Sign in');
  });
  
  // Login just to be sure
  fillIn(".email input", email);
  fillIn(".password input", pass);
  click("button[type=submit]");

  andThen(function() {
    assert.equal( currentURL(), "/projects", "should redirect to projects");
  });
});
