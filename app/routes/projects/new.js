import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('project');
  },
  actions: {
    saveProject(newProject) {
      newProject.save().then(() => this.transitionTo('projects'));
    },
    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
