import { test } from 'qunit';
import moment from 'moment';
import moduleForAcceptance from 'rails-list/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | New Project');

function imageUrl() {
  return "https://rails-apps.com/uploads/app/screenshot/500/screenshot.png";
}


test('should show header', function(assert) {
  visit('/projects/new');
  andThen(function() {
    assert.equal(find('h2').text(), 'Add a new project');
  });
});

test('should render resulting project', function(assert) {
  visit('/projects/new');

  fillIn(".title input", "Github");
  fillIn(".founders input", "Cool Guy");
  fillIn(".headquarters input", "SA");
  fillIn(".category input", "Developer tools");
  fillIn(".image input", imageUrl());

  click("button[type=submit]");
  andThen(function() {
    assert.equal( currentRouteName(), "projects.show", 'should redirect to new project');

    assert.equal(find('.title').text().trim(), "Github");
    assert.equal(find('.founders .text').text().trim(), "Cool Guy");
    assert.equal(find('.headquarters .text').text().trim(), "Other World - SA");
    assert.equal(find('.category .text').text().trim(), "Developer tools");
    assert.equal(find('.image img').attr('src').trim(), imageUrl());
  });
});

test('should show appropriate error messages', function(assert) {
  visit('/projects/new');

  fillIn(".founded-at input", moment(new Date()).format("DD/MM/YYYY"));
  fillIn(".image input", "screenshot.png");

  click("button[type=submit]");
  andThen(function() {
    assert.equal( currentRouteName(), "projects.new", 'should stay on the same page');
    assert.equal(find('.title .error').text().trim(), "Title can't be blank");
    assert.equal(find('.image .error').text().trim(), "Image must be a valid url");
  });
});
