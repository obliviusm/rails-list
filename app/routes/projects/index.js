import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('project');
  },
  actions: {
    filterByCategory(param) {
      if (param !== '') {
        return this.get('store').query('project', { filter: { category: param } });
      } else {
        return this.get('store').findAll('project');
      }
    }
  }
});
