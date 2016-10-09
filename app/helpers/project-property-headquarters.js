import Ember from 'ember';

const citiesFromUSA = [
  'San Francisco',
  'New York'
];

export function projectPropertyHeadquarters([city]/*, hash*/) {
  if(!city) {
    city = ""
  }
  if ( citiesFromUSA.some( element => city.includes(element) ) ) {
    return 'USA';
  }
  return 'Other World';
}

export default Ember.Helper.helper(projectPropertyHeadquarters);
