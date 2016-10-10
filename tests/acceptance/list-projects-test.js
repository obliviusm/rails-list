import { test } from 'qunit';
import moduleForAcceptance from 'rails-list/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list projects');

test('should redirect to projects route.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/projects', 'should redirect automatically');
  });
});

test('should list available projects.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('article').length, 67, 'should see 67 listings');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information.', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should filter the list of projects by category.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'tale');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(find('article').length, 10, 'should show 10 listing');
    assert.equal(find('article .category:contains("tale")').length, 10, 'should contain 10 listing with location tale');
  });
});

test('should show details for a specific project', function (assert) {
  visit('/');
  click('a:contains("Gottlieb and Sons")');
  andThen(function() {
    assert.equal(currentURL(), '/projects/1', 'should navigate to show route');
    assert.equal(find('article h3 a').text().trim(), "Gottlieb and Sons", 'should list project title');
    // assert.equal(find('.description').length, 1, 'should list a description of the project');
  });
});
