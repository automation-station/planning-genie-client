import DS from 'ember-data';

export default DS.Model.extend({
  materialType: DS.attr('string'),
  name: DS.attr('string'),
  deliveries: DS.hasMany('delivery')
});
