import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function() {
    this.route('show', { path: '/:project_id' });
  });
  this.route('about');
  this.route('contact');
});

export default Router;
