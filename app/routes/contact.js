import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import ENV from '../config/environment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service('session'),
  model() {
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
    };
    return jQuery.ajax(requestOptions);
  }
});
