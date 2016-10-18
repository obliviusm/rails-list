import Ember from 'ember';

export default Ember.Component.extend({
  isWide: false,
  session: Ember.inject.service('session'),
  currentUserEmail: Ember.computed('session.data.authenticated.uid', function() {
    return this.get('session.data.authenticated.uid');
  }),
  createdByCurrentUser: Ember.computed('currentUserEmail', 'project.userEmail', function() {
    return this.get('currentUserEmail') == this.get('project.userEmail');
  }),
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
