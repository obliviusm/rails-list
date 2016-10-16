import Ember from 'ember';
import DS from 'ember-data';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default  DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.APP.host,
  namespace: 'api',
  authorizer: 'authorizer:devise',
  session: Ember.inject.service('session'),
  headers: Ember.computed('session.authToken', function() {
    let authProps = this.get('session.data.authenticated');
    return {
      "access-token": authProps["accessToken"],
      client: authProps["client"],
      expiry: authProps["expiry"],
      "token-type": authProps["tokenType"],
      uid: authProps["uid"]
    };
  })
});
