import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('project-listing', 'Integration | Component | project listing', {
  integration: true
});

test('should toggle wide class on click', function(assert) {
  assert.expect(3);
  let stubProject = Ember.Object.create({
    image: 'fake.png',
    title: 'test-title',
    founders: 'test-name',
    category: 'test-category',
    headquarters: 'test-city',
    foundedAt: Date.now()
  });
  this.set('projectObj', stubProject);
  this.render(hbs`{{project-listing project=projectObj}}`);
  assert.equal(this.$('.wide .image').length, 0, 'initially rendered small');
  this.$('.image').click();
  assert.equal(this.$('.wide .image').length, 1, 'rendered wide after click');
  this.$('.image').click();
  assert.equal(this.$('.wide .image').length, 0, 'rendered small after second click');
});
