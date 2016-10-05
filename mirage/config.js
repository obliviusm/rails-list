export default function() {
  this.namespace = '/api';

  let projects = [{
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
  }];

  this.get('/projects', function(db, request) {
    if(request.queryParams.category !== undefined) {
      let filteredProjects = projects.filter(function(i) {
        return i.attributes.category.toLowerCase().indexOf(request.queryParams.category.toLowerCase()) !== -1;
      });
      return { data: filteredProjects };
    } else {
      return { data: projects };
    }
  });
}
