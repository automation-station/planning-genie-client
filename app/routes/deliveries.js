import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('delivery')
  },

  actions: {
    assignInstructor (instructorId, deliveryId) {
      let user = this.get('store').peekRecord('user', instructorId)
      let delivery = this.get('store').peekRecord('delivery', deliveryId)
      delivery.set('user', user);
      delivery.set('status', 'not prepped')
      return delivery.save()
        .catch(console.log)
    }
  }
});
