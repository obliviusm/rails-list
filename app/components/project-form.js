import Ember from 'ember';

export default Ember.Component.extend({
  showMessage: false,
  actions: {
    buttonClicked(project) {
      project.validate().then(({model, validations}) => {
        if (validations.get('isValid')) {
          this.sendAction('action', model);
        } else {
          this.set('showMessage', true);
        }
      });
    }
  }
});
