import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  title: {
    description: 'Title',
    validators: [
      validator('presence', true)
    ]
  },
  foundedAt: {
    description: 'founded at',
    validators: [
      validator('date', {
        before: 'now',
        format: 'DD/MM/YYYY',
        message: 'Is it from the future?'
      })
    ]
  },
  image: {
    description: 'Image',
    validators: [
      validator('format', {
        allowBlank: false,
        type: 'url'
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  title: DS.attr('string'),
  founders: DS.attr('string'),
  headquarters: DS.attr('string'),
  category: DS.attr('string'),
  foundedAt: DS.attr('date'),
  image: DS.attr('string'),
  userEmail: DS.attr('string')
});
