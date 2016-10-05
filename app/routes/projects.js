import Ember from 'ember';

let projects = [{
  id: 'intercom',
  title: 'Intercom',
  founders: 'Eoghan McCabe, Des Traynor, Ciaran Lee, & David Barrett',
  headquarters: 'San Francisco',
  category: 'Analytics',
  founded: '2011',
  image: 'https://rails-apps.com/uploads/app/screenshot/500/screenshot.png'
}, {
  id: 'github',
  title: 'Github',
  founders: 'Tom Preston-Werner, Chris Wanstrath, PJ Hyett',
  headquarters: 'San Francisco',
  category: 'Developer tools',
  founded: 'February 8, 2008',
  image: 'https://rails-apps.com/uploads/app/screenshot/13/screenshot.png'
}, {
  id: 'kickstarter',
  title: 'Kickstarter',
  founders: 'Perry Chen, Yancey Strickler, Charles Adler',
  headquarters: 'Brooklyn, New York, U.S.',
  category: 'Crowdfunding',
  founded: '28 April 2009',
  image: 'https://rails-apps.com/uploads/app/screenshot/501/screenshot.png'
}];

export default Ember.Route.extend({
  model() {
    return projects;
  }
});
