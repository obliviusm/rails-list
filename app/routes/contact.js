import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from '../config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  model() {
    // return new RSVP.Promise((resolve, reject) => {
      let authProps = this.get('session.data.authenticated');
      let requestOptions = {
        url:      ENV.APP.host + '/api/demo/members_only',
        type:     'GET',
        dataType: 'json',
        headers: {
          "access-token": authProps["accessToken"],
          client: authProps["client"],
          expiry: authProps["expiry"],
          "token-type": authProps["tokenType"],
          uid: authProps["uid"]
        }
        // beforeSend(xhr, settings) {
        //   xhr.setRequestHeader('Accept', settings.accepts.json);
        //   xhr.setRequestHeader('access-token', settings.accepts.json);
        //   xhr.setRequestHeader('client', settings.accepts.json);
        //   xhr.setRequestHeader('expiry', settings.accepts.json);
        // }
      };
      console.log(requestOptions);
      return jQuery.ajax(requestOptions);
    // });
  }
});
