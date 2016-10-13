import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  title: {
    description: 'Title',
    validators: [
      validator('presence', true)
    ]
  }
});

export default DS.Model.extend(Validations, {
  title: DS.attr('string'),
  founders: DS.attr('string'),
  headquarters: DS.attr('string'),
  category: DS.attr('string'),
  foundedAt: DS.attr('date'),
  image: DS.attr('string')
});
