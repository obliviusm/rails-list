import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('project', params.project_id);
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
