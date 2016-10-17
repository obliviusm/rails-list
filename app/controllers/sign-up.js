import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  actions: {
    register: function() {
      let requestOptions = {
        url:      ENV.APP.host + '/api/auth',
        type:     'POST',
        dataType: 'json',
        headers: {
          Accept: 'application/json'
        },
        data: {
          email: this.get('identification'),
          password: this.get('password'),
          password_confirmation: this.get('password-confirmation')
        }
      };
      return jQuery.ajax(requestOptions).then(() => {
        this.transitionToRoute('login');
      }).catch((reason) => {
        this.set('errorMessage', reason.errors);
      });
    }
  }
});
