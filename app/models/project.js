import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  founders: DS.attr('string'),
  headquarters: DS.attr('string'),
  category: DS.attr('string'),
  foundedAt: DS.attr('date'),
  image: DS.attr('string')
  // description: DS.attr('string')
});
