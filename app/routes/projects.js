import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ["Intercom", "GitHub", "Kickstarter"];
  }
});
