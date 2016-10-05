export default function() {
  this.get('/projects', function() {
    return {
      data: [{
        type: 'projects',
        id: 1,
        attributes: {
          title: 'Intercom',
          founders: 'Eoghan McCabe, Des Traynor, Ciaran Lee, & David Barrett',
          headquarters: 'San Francisco',
          category: 'Analytics',
          founded: '2011',
          image: 'https://rails-apps.com/uploads/app/screenshot/500/screenshot.png'
        }
      }, {
        type: 'projects',
        id: 2,
        attributes: {
          title: 'Github',
          founders: 'Tom Preston-Werner, Chris Wanstrath, PJ Hyett',
          headquarters: 'San Francisco',
          category: 'Developer tools',
          founded: 'February 8, 2008',
          image: 'https://rails-apps.com/uploads/app/screenshot/13/screenshot.png'
        }
      }, {
        type: 'projects',
        id: 3,
        attributes: {
          title: 'Kickstarter',
          founders: 'Perry Chen, Yancey Strickler, Charles Adler',
          headquarters: 'Brooklyn, New York, U.S.',
          category: 'Crowdfunding',
          founded: '28 April 2009',
          image: 'https://rails-apps.com/uploads/app/screenshot/501/screenshot.png'
        }
      }]
    };
  });
}
