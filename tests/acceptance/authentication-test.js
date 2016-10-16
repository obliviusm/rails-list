import { test } from 'qunit';
import moduleForAcceptance from 'rails-list/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | authentication');

test('projects cannot be visited when the user is not authenticated', (assert) => {
  visit('/projects');
  andThen(() => {
    assert.equal(currentURL(), '/login', 'should redirect to login');
  });
});

test('logs in with right credentials and logs out', (assert) => {
  visit('/login');

  fillIn(".email input", "test@test.com");
  fillIn(".password input", "password");
  click("button[type=submit]");

  andThen(function() {
    assert.equal( currentURL(), "/projects", "should redirect to projects");
  });

  click('#logout');

  andThen(function() {
    assert.equal( currentURL(), "/login", "should redirect back to login");
  });
});
