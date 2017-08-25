import Ember from 'ember';

export default Ember.Component.extend({
  preferences: {
    viewAll: false
  },

  actions: {
    assignInstructor (instructorId, deliveryId) {
      this.sendAction('assignInstructor', instructorId, deliveryId)
    },
    toggleView () {
      this.set('preferences.viewAll', !this.get('preferences.viewAll'))
    }
  }
});
