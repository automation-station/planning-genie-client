import Ember from 'ember';

export default Ember.Component.extend({
  assignedInstructor: null,
  actions: {
    assignInstructor: function() {
      this.sendAction('assignInstructor', this.get('assignedInstructor'), this.get('delivery').id)
    }
  }
});
