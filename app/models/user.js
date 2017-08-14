import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  delivery: DS.hasMany('delivery'),
  profile: DS.belongsTo('profile')
});
