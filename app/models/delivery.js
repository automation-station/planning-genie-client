import DS from 'ember-data';

export default DS.Model.extend({
   dueDate: DS.attr('date'),
   status: DS.attr('string'),
   cohort: DS.attr('string'),
   user: DS.belongsTo('user'),
   material: DS.belongsTo('material'),
   upcoming: DS.attr('boolean')
});
