import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  deliveries: DS.hasMany('delivery'),
  profile: DS.belongsTo('profile')
});
