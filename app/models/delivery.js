import DS from 'ember-data';

export default DS.Model.extend({
   dueDate: DS.attr('date'),
   status: DS.attr('string'),
   cohort: DS.attr('string'),
   userId: DS.attr('number'),
   materialId: DS.attr('number'),
});
