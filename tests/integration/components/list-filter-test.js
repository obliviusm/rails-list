import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import RSVP from 'rsvp';

moduleForComponent('list-filter', 'Integration | Component | filter listing', {
  integration: true
});

const ITEMS = [{category: 'Analytics'}, {category: 'Developer tools'}, {category: 'Crowdfunding'}];
const FILTERED_ITEMS = [{category: 'Analytics'}];

test('should initially load all listings', function (assert) {
  // we want our actions to return promises, since they are potentially fetching data asynchronously
  this.on('filterByCategory', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  // with an integration test, you can set up and use your component in the same way your application
  // will use it.
  this.render(hbs`
    {{#list-filter filter=(action 'filterByCategory') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="category">
          {{item.category}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  // the wait function will return a promise that will wait for all promises
  // and xhr requests to resolve before running the contents of the then block.
  return wait().then(() => {
    assert.equal(this.$('.category').length, 3);
    assert.equal(this.$('.category').first().text().trim(), 'Analytics');
  });
});

test('should update with matching listings', function (assert) {
  this.on('filterByCategory', (val) => {
    if (val === '') {
      return RSVP.resolve(ITEMS);
    } else {
      return RSVP.resolve(FILTERED_ITEMS);
    }
  });

  this.render(hbs`
    {{#list-filter filter=(action 'filterByCategory') as |results|}}
      <ul>
      {{#each results as |item|}}
        <li class="category">
          {{item.category}}
        </li>
      {{/each}}
      </ul>
    {{/list-filter}}
  `);

  // The keyup event here should invoke an action that will cause the list to be filtered
  this.$('.list-filter input').val('Ana').keyup();

  return wait().then(() => {
    assert.equal(this.$('.category').length, 1);
    assert.equal(this.$('.category').text().trim(), 'Analytics');
  });
});
