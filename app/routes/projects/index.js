import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  queryParams: {
    "currentUser": {
      refreshModel: true
    }
  },
  model(params) {
    if (params["currentUser"]) {
      const userEmail = this.get('session.data.authenticated.uid');
      return this.get('store').query('project', {filter: {"user_email": userEmail }});
    } else {
      return this.get('store').findAll('project');
    }
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
