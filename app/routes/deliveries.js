import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('delivery')
  },

  actions: {
    assignInstructor (instructorId, deliveryId) {
      Ember.RSVP.hash({
        user: this.get('store').peekRecord('user', instructorId) ||
              this.get('store').findRecord('user', instructorId),
        delivery: this.get('store').peekRecord('delivery', deliveryId)
      })
        .then((data) => {
          const delivery = data.delivery
          delivery.set('user', data.user)
          return delivery.save()
        })
        .catch(console.error)
    }
  }
});
