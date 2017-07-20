import DS from 'ember-data';

export default DS.Model.extend({
  material_type: DS.attr('string'),
  name: DS.attr('string')
});
