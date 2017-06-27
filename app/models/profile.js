import DS from 'ember-data';

export default DS.Model.extend({
  givenName: DS.attr('string'),
  familyName: DS.attr('string'),
  photoUrl: DS.attr('string'),
  preferences: DS.attr('string'),
  user: DS.belongsTo('user')
});
