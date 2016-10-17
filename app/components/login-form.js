import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    authenticate: function() {
      let identification = this.get('identification');
      let password = this.get('password');
      return this.get('session').authenticate('authenticator:devise', identification, password).then(() => {
        this.sendAction('action');
      }).catch((reason) => {
        this.set('errorMessage', reason.errors[0]);
      });
    }
  }
});
