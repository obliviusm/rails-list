import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  founders: DS.attr(),
  headquarters: DS.attr(),
  category: DS.attr(),
  founded: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});
