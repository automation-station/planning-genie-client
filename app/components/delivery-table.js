import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    assignInstructor (instructorId, deliveryId) {
      this.sendAction('assignInstructor', instructorId, deliveryId)
    }
  }
});
