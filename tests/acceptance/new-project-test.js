import { test } from 'qunit';
import moduleForAcceptance from 'rails-list/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | New Project');

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
  // fillIn(".founded-at input", "screenshot.png");
  fillIn(".image input", "screenshot.png");
  click("button[type=submit]");
  andThen(function() {
    assert.ok(/projects\/[0-9]+/g.exec( currentURL() ), 'should redirect to new project');
    assert.equal(find('.title').text().trim(), "Github");
    assert.equal(find('.founders .text').text().trim(), "Cool Guy");
    assert.equal(find('.headquarters .text').text().trim(), "Other World - SA");
    assert.equal(find('.category .text').text().trim(), "Developer tools");
    assert.equal(find('.image img').attr('src').trim(), "screenshot.png");
  });
});
